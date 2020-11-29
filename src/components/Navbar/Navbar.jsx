import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Grid, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

import { AppContext } from '../../context/appContext';
import { LOGOUT } from '../../constant/actionTypes'

// icons
import navIcon from '../../assets/navIcon.svg'
import rydwan from '../../assets/dw-profile-picture.png'
import addmusic from '../../assets/icons/addmusic.svg'
import addartist from '../../assets/icons/addartist.svg'
import logout from '../../assets/icons/logout.svg'
import pay from '../../assets/icons/pay.svg'

// Menu Dropdown
// import Menu from '@material-ui/core/Menu';

import { StyledMenu } from './Dropdown/Dropdown'
import MenuItem from '@material-ui/core/MenuItem';

import makeStyles from './style';

function Navbar() {

    const router = useHistory();

    const classes = makeStyles();

    // eslint-disable-next-line
    const [state, dispatch] = useContext(AppContext);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch({ type: LOGOUT })
    }

    return state.isLogin ? (
        <nav className={classes.navbar}>
            <Container>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item >
                        <img src={navIcon} alt="Navigation Bar Icon" height="30" />
                    </Grid>
                    <Grid item >
                        <Avatar onClick={handleClick} className={classes.bgAvatar} src={rydwan} />
                    </Grid>
                </Grid>
            </Container>
            {state.currentUser.isAdmin ? (<StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                    onClick={handleClose}>
                    <img style={{ marginRight: '12px' }} src={addmusic} alt="icon" width="25px" />
                    Add Music
                </MenuItem>
                <MenuItem
                    style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                    onClick={handleClose}>
                    <img style={{ marginRight: '12px' }} src={addartist} alt="icon" width="25px" />
                    Add Artist
                </MenuItem>
                <MenuItem
                    style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                    onClick={handleLogout}>
                    <img style={{ marginRight: '12px' }} src={logout} alt="icon" width="25px" />
                    Logout
                </MenuItem>
            </StyledMenu>) : (
                    <StyledMenu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {
                            state.currentUser.isMember ? (<></>) : (<MenuItem
                                style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                                onClick={handleClose}>
                                <img style={{ marginRight: '12px' }} src={pay} alt="icon" width="25px" />
                            Pay
                            </MenuItem>)
                        }
                        <MenuItem
                            style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                            onClick={handleLogout}>
                            <img style={{ marginRight: '12px' }} src={logout} alt="icon" width="25px" />
                     Logout
                 </MenuItem>
                    </StyledMenu>
                )}

        </nav>
    ) : (<></>)
}

export default Navbar
