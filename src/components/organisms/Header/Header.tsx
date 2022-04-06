import { Typography, Grid, AppBar, Toolbar } from '@mui/material'
import Container from '@mui/material/Container';
import { padding, textAlign } from '@mui/system'
import React, { useState } from 'react'
import { BlinkistLogo, Search, Login, DownArrow, UpArrow } from '../../atoms/Icons/icons/icons'
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
import ExploreDropdown from '../ExploreDropdown/ExploreDropdown';
import Footer from '../Footer/Footer';

function Header() {
    const [dropdown, setDropdown] = useState(false);
    const styles = {
        link: {
            textDecoration: 'none',
            color: 'black'
        },
        title: {
            fontFamily: 'Cera Pro',
            fontStyle: 'normal',
            fontWeight: 500
        }
    }


    return (<>
        <AppBar elevation={0} position='relative' sx={{
            color: 'black',
            bgcolor: 'white',
            paddingLeft: { md: '10%' },
            paddingRight: { md: '10%' },
            paddingTop: '15px',
            paddingBottom: '10px'
        }}>
            <Grid container spacing={2}>
                <Grid item><BlinkistLogo /></Grid>
                <Grid item ><Search /></Grid>
                <Grid item
                    onClick={() => { setDropdown(!dropdown) }} onMouseLeave={() => { setDropdown(false) }}>
                    <span className='hover'>
                        <Typography component='span' paddingRight={'10px'} style={styles.title}>Explore</Typography>
                        {dropdown ? <UpArrow /> : <DownArrow />}
                        {dropdown && <ExploreDropdown />}
                    </span>
                </Grid>
                <Grid item style={{ flexGrow: 1 }} >
                    <Typography style={styles.title}><Link to='/' style={styles.link} className='hover'>My Library</Link></Typography>
                </Grid>
                <Grid item> <Login /></Grid>
                <Grid item ><DownArrow /></Grid>
            </Grid>
        </AppBar>
    </>)
}

export default Header