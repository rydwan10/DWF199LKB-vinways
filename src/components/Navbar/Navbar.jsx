import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Grid, Avatar, Menu } from '@material-ui/core';
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

import MenuItem from '@material-ui/core/MenuItem';

import makeStyles from './style';

function Navbar() {

    const StyledMenu = withStyles({
        paper: {
            backgroundColor: '#363954'
        },
    })((props) => (
        <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    ));


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
        setAnchorEl(null);
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
                <Link className={classes.link} to="/add-music">
                    <MenuItem
                        style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                        onClick={handleClose}>
                        <img style={{ marginRight: '12px' }} src={addmusic} alt="icon" width="25px" />
                        Add Music
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/add-artist">
                    <MenuItem
                        style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                        onClick={handleClose}>
                        <img style={{ marginRight: '12px' }} src={addartist} alt="icon" width="25px" />
                        Add Artist
                    </MenuItem>
                </Link>
                <Link className={classes.link} to="/transactions">
                    <MenuItem
                        style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                        onClick={handleClose}>
                        <img style={{ marginRight: '12px' }} src={pay} alt="icon" width="25px" />
                        Transactions
                    </MenuItem>
                </Link>
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
                            state.currentUser.isMember ? (<div></div>) : (
                                <Link className={classes.link} to="/pay">
                                    <MenuItem
                                        style={{ color: '#ffffff', fontFamily: 'Nunito' }}
                                        onClick={handleClose}>
                                        <img style={{ marginRight: '12px' }} src={pay} alt="icon" width="25px" />
                                        Pay
                                    </MenuItem>
                                </Link>

                            )
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
    ) : (<div></div>)
}

export default Navbar
