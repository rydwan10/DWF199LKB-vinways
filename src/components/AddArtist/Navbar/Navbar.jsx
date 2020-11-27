import React from 'react'

import navIcon from '../../../assets/navIcon.svg'
import adminPicture from '../../../assets/admin.jpg'
import { Container, Grid, Avatar } from '@material-ui/core';
import makeStyles from './style';

function Navbar() {
    const classes = makeStyles();

    return (
        <nav className={classes.navbar}>
            <Container>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item >
                        <img src={navIcon} alt="Navigation Bar Icon" height="30" />
                    </Grid>
                    <Grid item >
                        <Avatar className={classes.bgAvatar} src={adminPicture} />
                    </Grid>
                </Grid>
            </Container>
        </nav>
    )
}

export default Navbar
