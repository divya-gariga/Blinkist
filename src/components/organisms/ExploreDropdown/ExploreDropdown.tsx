import { Container, Grid, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useState } from 'react'
import './ExploreDropdown.css'
import { ExploreByCategory } from '../../data/data'
import { height } from '@mui/system'
import { Link } from 'react-router-dom'
const styles = {
    title: {
        color: 'grey',
        fontsize: '16px',
        fontWeight: 500,
        fontFamily: 'Cera Pro'
    },
    subtitle: {
        color: 'grey',
        fontsize: '16px',
        fontWeight: '400',
        fontFamily: 'Cera Pro'
    },

}
function ExploreDropdown() {
    return (
        <Container maxWidth="xl" style={{
            backgroundColor: '#F1F6F4',
            position: 'absolute', top: '50px', left: 0, right: 0, padding: '10px 15%', zIndex: '1'
        }}>
            <Grid container sx={{ background: '#F1F6F4', display: 'flex', justifyContent: 'space-around' }}>
                <Grid item style={styles.title} ><Typography variant='body1' sx={{ color: '#116BE9' }}>Explore by category</Typography></Grid>
                <Grid item style={styles.title} ><Typography variant='body1'>See recently added titles</Typography></Grid>
                <Grid item style={styles.title} ><Typography variant='body1'>See popular titles</Typography>   </Grid>
            </Grid>
            <hr style={{ height: '10px' }} />

            <Grid container rowSpacing={2} sx={{
                background: '#F1F6F4', display: 'flex',
                justifyContent: 'space-around', flexDirection: 'row', paddingLeft: '10%', rowSpacing: 1
            }}>
                {
                    ExploreByCategory.map((item) => {
                        return (
                            <Grid item key={item.name} md={4} xs={12} sm={6} style={styles.subtitle} >
                                <Stack direction="row" alignItems="center" gap={1} >
                                    {item.name == "Entrepreneurship" ? <>
                                        <img src={item.icon} />
                                        <Link to="/Entrepreneurship" className="link">
                                            <Typography variant="body2">{item.name}</Typography>
                                        </Link>
                                    </>
                                        : <>
                                            <img src={item.icon} />
                                            <Typography variant="body2">{item.name}</Typography>
                                        </>
                                    }
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </Container >
    )
}

export default ExploreDropdown