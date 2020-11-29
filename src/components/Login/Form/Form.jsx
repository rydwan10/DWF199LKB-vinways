import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/appContext';
import { LOGIN, SET_MODAL } from '../../../constant/actionTypes';
import { useHistory } from 'react-router-dom';

import { Grid, Button, TextField, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

import Modal from '../../Modal/Modal';
import makeStyles from './style';

function Form() {
    const router = useHistory();
    const [state, dispatch] = useContext(AppContext);
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault();
        if (input.email.trim() === '' || input.password.trim() === '') {
            dispatch({ type: SET_MODAL, payload: { isOpen: true, message: 'Email or password must not Empty!' } })
        } else {
            // state.users.map(user => )
            // dispatch({ type: LOGIN, payload: {data: input, isOpen: true, message: 'Login Success!'} });
            // router.push('/');
            const authenticatedUser = state.users.find(user => user.email === input.email && user.password === input.password);
            // console.log(authenticatedUser);
            // dispatch
            dispatch({ type: LOGIN, payload: { isLogin: true, currentUser: authenticatedUser } });
            router.push('/');
        }
    }

    const classes = makeStyles();

    return (
        <>
            <Modal />
            <form onSubmit={handleLogin} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography className={classes.loginTitle} variant="h4">Login</Typography>

                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid style={{ width: '80%' }} item>
                        <TextField
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            style={{ width: '100%' }}
                            label="Email" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <Lock fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid style={{ width: '80%' }} item>
                        <TextField
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            style={{ width: '100%' }}
                            type="password"
                            label="Password" />
                    </Grid>
                </Grid>

                <Grid container>
                    <Button type="submit" className={classes.loginButton} size="medium" variant="contained">Login</Button>
                </Grid>
            </form>
        </>
    )
}

export default Form
