import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './library.css';
import BookCards from '../components/molecules/BookCard/BookCards';
import axios from 'axios';
import Secondary from '../components/molecules/Buttons/Secondary/Secondary';


interface bookProps {
    coverImage: string; title: string; author: string; state: string;
    isTrending: boolean; isJustAdded: boolean; isFeatured: boolean;
}

function Library() {
    const [value, setValue] = React.useState('1');
    const [blinksInfo, setBlinksInfo] = useState([]);
    const [blinkState, setBlinkState] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        axios.get("http://localhost:8000/BooksInfo")
            .then((response) => {
                const data = response.data;
                setBlinksInfo(data);
            })
            .catch(error => console.error(`Error: $(error)`))
    }, [blinkState]);

    function onClickOfFinished(book: bookProps, id: number) {
        axios.put(`http://localhost:8000/BooksInfo/${id}`, {
            ...book,
            "state": "finished"
        }).then(response => {
        }).catch(error => {
            console.log(error);
        });
        setBlinkState(!blinkState)
    }

    function onClickOfReadAgain(book: bookProps, id: number) {
        axios.put(`http://localhost:8000/BooksInfo/${id}`, {
            ...book,
            "state": "reading"
        }).then(response => {
        }).catch(error => {
            console.log(error);
        });
        setBlinkState(!blinkState)
    }

    const styles = {
        margin: {
            margin: '0px 10% 5%'
        },
        heading: {
            fontSize: '22px',
            lineHeight: '45px',
            fontWeight: 700,
            height: '45px'
        },
        link: {
            textDecoration: 'none',
            color: '#6D787E',
            fontFamily: 'Cera Pro',
            borderBottom: '2px solid grey',
            paddingRight: '10%'
        },
        tabs: {
            "&.MuiButtonBase-root.MuiTab-root": {
                backgroundColor: "yellow"
            }
        }

    }
    return (
        <>
            <div style={styles.margin}>
                <Typography style={styles.heading}> My Library</Typography>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} textColor={'inherit'} TabIndicatorProps={{
                                style: {
                                    backgroundColor: "rgba(44, 224, 128, 1)"
                                }
                            }} aria-label="lab API tabs example">
                                <Tab label="Currently Reading" value="1" />
                                <Tab label="Finished" value="2" />
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <Grid container rowSpacing={5}>
                                {blinksInfo.filter((book) => { return book["state"] === 'reading'; }).map((book) => {
                                    return (
                                        <Grid item md={4} p={2} key={book["id"]}>
                                            <BookCards img={book["coverImage"]} title={book["title"]}
                                                author={book["author"]} readTime={'13-minutes read'} />
                                            <Secondary label={'Finished'} onClickHandler={() => onClickOfFinished(book, book["id"])} />
                                        </Grid>
                                    )
                                })}
                            </Grid>

                        </TabPanel>
                        <TabPanel value="2">
                            <Grid container rowSpacing={5}>
                                {blinksInfo.filter((book) => { return book["state"] === 'finished'; }).map((book) => {
                                    return (
                                        <Grid item md={4} p={2} key={book["id"]}>
                                            <BookCards img={book["coverImage"]} title={book["title"]}
                                                author={book["author"]} readTime={'13-minutes read'} />
                                            <Secondary label={'Read Again'} onClickHandler={() => onClickOfReadAgain(book, book["id"])} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Box>


            </div>
        </>
    )
}

export default Library



