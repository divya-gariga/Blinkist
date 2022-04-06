import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IndexKind } from "typescript";
import { Blinks } from "../components/data/Books";
import BookCards from "../components/molecules/BookCard/BookCards";
import Secondary from "../components/molecules/Buttons/Secondary/Secondary";
import Banner from "../components/organisms/Banner/Banner";

function Entrepreneurship() {
  const [blinksInfo, setBlinksInfo] = useState([]);
  const [blinkState, setBlinkState] = useState(false);
  function onClickOfAddtoLibrary(
    book: {
      coverImage: string;
      title: string;
      author: string;
      state: string;
      isTrending: boolean;
      isJustAdded: boolean;
      isFeatured: boolean;
    },
    id: number
  ) {
    axios
      .put(`http://localhost:8000/BooksInfo/${id}`, {
        ...book,
        state: "reading",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setBlinkState(!blinkState);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/BooksInfo")
      .then((response) => {
        const data = response.data;
        setBlinksInfo(data);
      })
      .catch((error) => console.error(`Error: $(error)`));
  }, [blinkState]);

  const styles = {
    container: {
      backgroundColor: "#F1F6F4",
      height: "200px",
      padding: "3%",
    },
    title: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "30px",
    },
    margin: {
      margin: "2% 12% 5%",
    },
    link: {
      textDecoration: "none",
    },
  };

  return (
    <>
      <div style={styles.margin}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Banner />
          <Typography style={styles.title} p={3}>
            Trending Blinks
          </Typography>
          <Grid container rowSpacing={5}>
            {blinksInfo &&
              blinksInfo
                .filter((book) => {
                  return book["isTrending"] && book["state"] === "";
                })
                .map((book) => {
                  return (
                    <Grid item md={4} p={2} key={book["id"]}>
                      {book["title"] === "Beyond Entrepreneurship" ? (
                        <>
                          <Link
                            to={{
                              pathname: "/BeyondEntrepreneurship",
                            }}
                            style={styles.link}
                          >
                            <BookCards
                              img={book["coverImage"]}
                              title={book["title"]}
                              author={book["author"]}
                              readTime={"13-minutes read"}
                            />
                          </Link>
                          <Secondary
                            label="+ Add to library"
                            onClickHandler={() =>
                              onClickOfAddtoLibrary(book, book["id"])
                            }
                          />
                        </>
                      ) : (
                        <>
                          <BookCards
                            img={book["coverImage"]}
                            title={book["title"]}
                            author={book["author"]}
                            readTime={"13-minutes read"}
                          />

                          <Secondary
                            label="+ Add to library"
                            onClickHandler={() =>
                              onClickOfAddtoLibrary(book, book["id"])
                            }
                          />
                        </>
                      )}
                    </Grid>
                  );
                })}
          </Grid>

          <Typography style={styles.title} p={3}>
            Just Added
          </Typography>
          <Grid container rowSpacing={5}>
            {blinksInfo &&
              blinksInfo
                .filter((book) => {
                  return book["isJustAdded"] && book["state"] === "";
                })
                .map((book) => {
                  return (
                    <Grid item md={4} p={2} key={book["id"]}>
                      <BookCards
                        img={book["coverImage"]}
                        title={book["title"]}
                        author={book["author"]}
                        readTime={"13-minutes read"}
                      />
                      <Secondary
                        label="+ Add to library"
                        onClickHandler={() =>
                          onClickOfAddtoLibrary(book, book["id"])
                        }
                      />
                    </Grid>
                  );
                })}
          </Grid>

          <Typography style={styles.title} p={3}>
            Featured Audio Books
          </Typography>
          <Grid container rowSpacing={5}>
            {blinksInfo &&
              blinksInfo
                .filter((book) => {
                  return book["isFeatured"] && book["state"] === "";
                })
                .map((book) => {
                  return (
                    <Grid item md={4} p={2} key={book["id"]}>
                      <BookCards
                        img={book["coverImage"]}
                        title={book["title"]}
                        author={book["author"]}
                        readTime={"13-minutes read"}
                      />
                      <Secondary
                        label="+ Add to library"
                        onClickHandler={() =>
                          onClickOfAddtoLibrary(book, book["id"])
                        }
                      />
                    </Grid>
                  );
                })}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Entrepreneurship;
