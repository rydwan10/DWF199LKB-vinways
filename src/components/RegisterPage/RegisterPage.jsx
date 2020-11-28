import React from 'react'
import { Container, Grid } from '@material-ui/core';

// importing needed components
import Hero from './Hero/Hero';
import Form from './Form/Form';
import Navbar from './Navbar/Navbar';

// style
import makeStyles from './style'
function RegisterPage() {

    const classes = makeStyles();

    return (
        <div className={classes.mainContainer}>
            <Container maxWidth="lg">
                <Navbar />
                <Grid style={{ marginTop: '3rem' }} container justify="space-between" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Hero />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default RegisterPage
