import React from 'react'
import { Grid, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import BookOutlined from '@material-ui/icons/BookOutlined';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined';

import makeStyles from './style';

function Form() {

    const classes = makeStyles();

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
            <Typography className={classes.title} variant="h5">Add Music</Typography>

            <div className={classes.inputWrapper}>
                <Grid container className={classes.inputGroup}>
                    <Grid container item spacing={2} alignItems="center" justify="flex-start" sm={8}>
                        <Grid item>
                            <BookOutlined fontSize="large" style={{ color: 'white' }} />
                        </Grid>
                        <Grid style={{ width: '70%' }} item>
                            <TextField className={classes.inputField} variant="filled" style={{ width: '100%' }} label="Song Title" />
                        </Grid>
                    </Grid>

                    <Grid item sm={4}>
                        <Grid style={{ width: '100%' }} item>
                            <label style={{ display: 'flex', marginBottom: '1rem' }} htmlFor="proof">Attach Thumbnail</label>
                            <input style={{ display: 'flex' }} type="file" name="proof" id="proof" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={classes.inputGroup}>
                    <Grid container item spacing={2} alignItems="center" justify="flex-start" sm={12}>
                        <Grid item>
                            <CalendarTodayOutlined fontSize="large" style={{ color: 'white' }} />
                        </Grid>
                        <Grid style={{ width: '80%' }} item>
                            <TextField className={classes.inputField} variant="filled" style={{ width: '100%' }} label="Year" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className={classes.inputGroup} alignItems="center">
                    <Grid item>
                        <SupervisedUserCircleOutlined fontSize="large" style={{ color: 'white' }} />
                    </Grid>
                    <Grid style={{ width: '90%' }} item>
                        <FormControl variant="filled" className={classes.dropdownArtist}>
                            <InputLabel htmlFor="filled-age-native-simple">Artist</InputLabel>
                            <Select
                                classNames={classes.selectArtist}
                            // native
                            // inputProps={{
                            //     name: 'age',
                            //     id: 'filled-age-native-simple',
                            // }}
                            >
                                <MenuItem aria-label="None" value="" />
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid style={{ width: '100%', marginLeft: '3.5rem' }} item>
                        <label style={{ display: 'flex', marginBottom: '1rem' }} htmlFor="proof">Attach</label>
                        <input style={{ display: 'flex' }} type="file" name="proof" id="proof" />
                    </Grid>
                </Grid>


            </div>

            <Grid container justify="center">
                <Button className={classes.addMusicButton} size="medium" variant="contained">Add Music</Button>
            </Grid>
        </form>
    )
}

export default Form
