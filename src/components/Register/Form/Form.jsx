import { useContext, useState } from 'react';
import { AppContext } from '../../../context/appContext';
import { REGISTER, SET_MODAL } from '../../../constant/actionTypes';
import { useHistory } from 'react-router-dom'

// material ui components
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';

import Modal from '../../Modal/Modal';

import makeStyles from './style';

function Form() {
    const [input, setInput] = useState({
        email: '', password: '', retypePassword: '', fullname: ''
    });
    const [state, dispatch] = useContext(AppContext);
    const classes = makeStyles();
    const router = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();
        if (input.email.trim() === '' || input.password.trim() === '' || input.retypePassword.trim() === '' || input.fullname.trim() === '') {
            dispatch({ type: SET_MODAL, payload: { isOpen: true, message: 'all field must not empty!' } })
        } else if (input.password !== input.retypePassword) {
            dispatch({ type: SET_MODAL, payload: { isOpen: true, message: 'password doesn\'t match with retype password!' } });
        } else {
            dispatch({ type: REGISTER, payload: { newUser: input } });
            router.push('/');
        }
    }

    return (
        <>
            <Modal />
            <form onSubmit={handleRegister} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography className={classes.loginTitle} variant="h4">Register</Typography>

                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <Mail fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid item style={{ width: '80%' }} >
                        <TextField
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            style={{ width: '100%' }}
                            label="Email"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <Lock fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid item style={{ width: '80%' }}>
                        <TextField
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            style={{ width: '100%' }}
                            type="password"
                            label="Password"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <Lock fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid item style={{ width: '80%' }}>
                        <TextField
                            onChange={(e) => setInput({ ...input, retypePassword: e.target.value })}
                            style={{ width: '100%' }}
                            type="password"
                            label="Re-type Password"
                        />
                    </Grid>
                </Grid>


                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid style={{ width: '80%' }} item>
                        <TextField
                            onChange={(e) => setInput({ ...input, fullname: e.target.value })}
                            style={{ width: '100%' }}
                            label="Full Name"
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Button className={classes.loginButton} size="medium" variant="contained" type="submit">Register</Button>
                </Grid>
            </form>
        </>
    )
}

export default Form
