import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Time } from "../components/atoms/Icons/icons/icons";
import Primary from '../components/molecules/Buttons/Primary/Primary';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function BeyondEntrepreneurship() {
    const [value, setValue] = React.useState('1');
    const [blinksInfo, setBlinksInfo] = useState([]);
    const [blinkState, setBlinkState] = useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const styles = {
        margin: {
            margin: '2% 12% 5%'
        },
        header: {
            font: "Cera Pro",
            fontWeight: "700",
            fontSize: "36px",
            lineWeight: "45px"
        },
        img: {
            float: "right"
        },
        subtitle5: {
            fontFamily: "Cera Pro",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "25px",
            fontStyle: "normal"
        },
        body1: {
            fontFamily: "Cera Pro light",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px"
        },
        caption3: {
            fontFamily: "Cera Pro light",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "17px"
        }

    }
    function onClickOfFinished() {
        axios.put(`http://localhost:8000/BooksInfo/2`, {
            ...blinksInfo,
            "state": "finished"
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        setBlinkState(!blinkState)
    }
    useEffect(() => {
        axios.get("http://localhost:8000/BooksInfo/2")
            .then((response) => {
                const data = response.data;
                setBlinksInfo(data);
            })
            .catch(error => console.error(`Error: $(error)`))
    }, [blinkState]);
    return (
        <>
            <Box style={styles.margin}>
                <Typography>Get the key ideas from</Typography>
                <Grid container >
                    <Grid item md={8}>
                        <Typography variant='h5' style={styles.header} py={2}>
                            Beyond Entrepreneurship
                        </Typography>
                        <Typography style={styles.subtitle5}>Turning your Business into an Enduring Great company</Typography>
                        <Typography style={styles.body1} py={2}>By Jim Collins and Bill Lazier</Typography>
                        <div style={{ display: "flex", justifyContent: "flex-start", }}>
                            <span style={{ paddingRight: "5px" }}> <Time /></span>
                            <Typography style={styles.caption3}>15-minute read</Typography></div>
                        <div style={{ padding: '3%' }}>
                            <Primary label="Read now" onClickHandler={function (arg1: any): void {
                                throw new Error('Function not implemented.');
                            }} /><span style={{ paddingLeft: '3%' }}>
                                <Primary label="Finished" onClickHandler={onClickOfFinished
                                } /></span>
                        </div>
                    </Grid>
                    <Grid item md={4} sx={{ justifyContent: "flex-end" }} alignItems="center"
                        justifyContent="center">
                        <img src="assets/beyond entrepreneurship 2.png" />
                    </Grid>
                </Grid>
                <Box sx={{ width: '70%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} textColor={'inherit'} TabIndicatorProps={{
                                style: {
                                    backgroundColor: "rgba(44, 224, 128, 1)"
                                }
                            }} aria-label="lab API tabs example">
                                <Tab label="Synopsis" value="1" />
                                <Tab label="Who is it for?" value="2" />
                                <Tab label="About the author" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook,
                            Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines
                            the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case
                            studies pertinent to today’s business world.
                        </TabPanel>
                        <TabPanel value="2">
                            Beyond Entrepreneurship 2.0 is not for everyone. If you are the following types of people, you may like the book:
                            Office drones looking for a career change,
                            Founders of start-ups unsure where to start,
                            Entrepreneurs who want to scale up their businesses
                        </TabPanel>
                        <TabPanel value="3">
                            Bill Lazier was a Stanford professor of business and a pioneering entrepreneur.
                            In addition, he mentored Jim Collins, who is now a sought-after consultant and best-selling
                            author of leadership books
                            including Good to Great and Built to Last. Lazier and Collins coauthored
                            Beyond Entrepreneurship.                         </TabPanel>
                    </TabContext>
                </Box>

            </Box>
        </>
    )
}

export default BeyondEntrepreneurship