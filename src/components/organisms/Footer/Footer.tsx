import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { BlinkistLogo } from '../../atoms/Icons/icons/icons';
import { color } from '@mui/system';
import { Typography } from '@mui/material'
import './footer.css'
function Footer() {

    return (
        <Box px={{ xs: 3, sm: '8%' }}
            py={{ xs: 5, sm: 5 }}
            bgcolor="#F1F6F4" color="#6d787e">
            <Container maxWidth="xl" style={{
                background: '#F1F6F4',
            }}>
                <Grid container justify-content="center" >
                    <Grid item xs={12} sm={6} md={6}>
                        <Box>
                            <Box><BlinkistLogo /></Box>
                            <Box><h1 style={{ color: '#0365F2' }}>Big ideas in small packages start learning now</h1></Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Box color="black" fontWeight={700}>
                            Editorial
                        </Box>
                        <Box>
                            <p>Book lists</p>
                        </Box>
                        <Box>
                            <p>What is nonfiction</p>
                        </Box>

                        <Box>
                            <p>What to read next</p>
                        </Box>
                        <Box>
                            <p>Benefits of reading</p>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Box><Box color="black" fontWeight={700}>Useful links</Box>
                            <Box><p>Pricing</p></Box>
                            <Box><p>Blinkist Business</p></Box>
                            <Box><p>Gift Cards</p></Box>
                            <Box><p>Blinkist magazine</p></Box>
                            <Box><p>Contact & help</p></Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}> <Box>
                        <Box color="black" fontWeight={700}>Company</Box>
                        <Box><p>About</p></Box>
                        <Box><p>Careers</p></Box>
                        <Box><p>partners</p></Box>
                        <Box><p>Code of Conduct</p></Box>
                    </Box>
                    </Grid>

                </Grid>

            </Container >
            <Box textAlign="center" pt={3} color="#6d787e">©Blinkist 2021 Sitemap  |  Imprint  |  Terms of Service  |  Privacy Policies</Box>
        </Box>


    )
}

export default Footer