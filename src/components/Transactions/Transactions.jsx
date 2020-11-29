import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core';

// importing needed components
import TransactionTable from './TransactionTable/TransactionTable';

// style
import makeStyles from './style'
function UploadPayment() {

    const classes = makeStyles();

    return (
        <div className={classes.mainContainer}>
            <Container maxWidth="lg">
                <Typography className={classes.title} variant="h4" >Transaction List</Typography>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TransactionTable />
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default UploadPayment
