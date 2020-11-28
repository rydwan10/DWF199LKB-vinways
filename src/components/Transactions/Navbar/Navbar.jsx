import React from 'react'
import navIcon from '../../../assets/navIcon.svg'
import adminPicture from '../../../assets/admin.jpg'
import { Container, Grid, Avatar } from '@material-ui/core';
import makeStyles from './style';

// Menu Dropdown
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Navbar() {
    const classes = makeStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className={classes.navbar}>
            <Container>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item >
                        <img src={navIcon} alt="Navigation Bar Icon" height="30" />
                    </Grid>
                    <Grid item >
                        <Avatar onClick={handleClick} className={classes.bgAvatar} src={adminPicture} />
                    </Grid>
                </Grid>
            </Container>
            <Menu
                style={{ marginTop: '3rem' }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem style={{ color: 'green' }} onClick={handleClose}>Add Music</MenuItem>
                <MenuItem style={{ color: 'red' }} onClick={handleClose}>Add Artist</MenuItem>
            </Menu>
        </nav>
    )
}

export default Navbar
