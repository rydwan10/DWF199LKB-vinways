import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 200,
        overflow: 'hidden',
        display: 'inline-block'
    },
    media: {
        height: 140,
    },
    textGreen: {
        color: "#03F387",
        fontFamily: "Nunito"
    },
    yearText: {
        fontSize: '14px',
        fontFamily: "Nunito"

    },
    artistText: {
        fontSize: '14px',
        fontFamily: "Nunito"

    },
    titleWrapper: {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
});

function CardMusic({ music }) {

    const classes = useStyles();

    return (
        <Card style={{ background: '#363954', color: 'white' }} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={music.albumArt}
                    title={music.title}
                />
                <CardContent >
                    <Grid className={classes.titleWrapper} container alignItems="flex-end" direction="column">
                        <Grid item >
                            <Typography noWrap gutterBottom variant="body1" component="p">
                                {music.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.yearText} gutterBottom variant="body1" component="p">
                                {music.year}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Typography className={`${classes.textGreen} ${classes.artistText}`} variant="body1">
                                {music.artist}
                            </Typography>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions> */}
        </Card>
    );
}

export default CardMusic