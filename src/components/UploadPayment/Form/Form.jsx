import React from 'react'
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Lock from '@material-ui/icons/Lock';

import makeStyles from './style';

function Form() {

    const classes = makeStyles();

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <Typography className={classes.loginTitle} variant="h4">Premium</Typography>
            <Typography className={classes.subTitile} variant="body1">Bayar sekarang dan nikmati streaming musik yang kekinian dari <span className={classes.boldCompany}>Co <span className={classes.greenText}>Ways</span></span></Typography>
            <Typography className={classes.contactNumber} variant="h5"><span className={classes.boldCompany}>Co <span className={classes.greenText}>Ways</span> : 0981312323</span></Typography>

            <div className={classes.inputWrapper}>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid style={{ width: '80%' }} item>
                        <TextField style={{ width: '100%' }} label="Input your account number" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="flex-start" style={{ marginTop: '2rem' }}>
                    <Grid style={{ width: '100%' }} item>
                        <label style={{ display: 'flex', marginBottom: '1rem' }} htmlFor="proof">Attach proof of transfer</label>
                        <input style={{ display: 'flex' }} type="file" name="proof" id="proof" />
                    </Grid>
                </Grid>
            </div>

            <Grid container>
                <Button className={classes.sendButton} size="medium" variant="contained">Send</Button>
            </Grid>
        </form>
    )
}

export default Form
