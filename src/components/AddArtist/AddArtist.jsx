import React from 'react'
import { Container, Grid } from '@material-ui/core';

// importing needed components
import Form from './Form/Form';
import Navbar from './Navbar/Navbar';

// style
import makeStyles from './style'
function UploadPayment() {

    const classes = makeStyles();

    return (
        <div className={classes.mainContainer}>
            <Navbar />
            <Container maxWidth="lg">
                <Grid style={{ marginTop: '3rem' }} container justify="center" spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default UploadPayment
