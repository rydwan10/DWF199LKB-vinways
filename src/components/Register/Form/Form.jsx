import React from 'react'
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';

import makeStyles from './style';

function Form() {

    const classes = makeStyles();

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <Typography className={classes.loginTitle} variant="h4">Register</Typography>

            <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                    <Mail fontSize="large" style={{ color: 'white' }} />
                </Grid>
                <Grid item style={{ width: '80%' }} >
                    <TextField style={{ width: '100%' }} label="Email" />
                </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                    <Lock fontSize="large" style={{ color: 'white' }} />
                </Grid>
                <Grid item style={{ width: '80%' }}>
                    <TextField style={{ width: '100%' }} type="password" label="Password" />
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                    <Lock fontSize="large" style={{ color: 'white' }} />
                </Grid>
                <Grid item style={{ width: '80%' }}>
                    <TextField style={{ width: '100%' }} type="password" label="Re-type Password" />
                </Grid>
            </Grid>


            <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                    <AccountCircle fontSize="large" style={{ color: 'white' }} />
                </Grid>
                <Grid style={{ width: '80%' }} item>
                    <TextField style={{ width: '100%' }} label="Full Name" />
                </Grid>
            </Grid>

            <Grid container>
                <Button className={classes.loginButton} size="medium" variant="contained">Register</Button>
            </Grid>
        </form>
    )
}

export default Form
