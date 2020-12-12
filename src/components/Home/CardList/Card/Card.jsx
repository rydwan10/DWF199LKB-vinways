import React, { useContext } from "react";
import { AppContext } from "../../../../context/appContext";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Grid,
  // Button,
  makeStyles,
} from "@material-ui/core";

// import { Add, PlayArrow } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 160,
    overflow: "hidden",
    display: "inline-block",
  },
  media: {
    height: 125,
    margin: ".8rem",
  },
  textGreen: {
    color: "#03F387",
    fontFamily: "Nunito",
  },
  yearText: {
    fontSize: "14px",
    fontFamily: "Nunito",
  },
  artistText: {
    fontSize: "14px",
    fontFamily: "Nunito",
  },
  titleWrapper: {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

function CardMusic({ music, handleAddToPlaylist }) {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AppContext);
  const classes = useStyles();

  const addToPlaylist = (music) => {
    handleAddToPlaylist(music);
  };

  return (
    <>
      <Card
        style={{
          background: "#363954",
          color: "white",
          borderRadius: "6px",
        }}
        className={classes.root}
      >
        <CardActionArea onClick={() => addToPlaylist(music)}>
          <CardMedia
            className={classes.media}
            image={music.albumArt}
            title={music.title}
          />
          <CardContent>
            <Grid
              className={classes.titleWrapper}
              container
              alignItems="flex-end"
              direction="column"
            >
              <Grid container item justify="space-between" alignItems="center">
                <Grid
                  item
                  style={{
                    width: "70%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      fontFamily: "Nunito",
                    }}
                  >
                    {music.title}
                  </span>
                </Grid>
                <Grid item>
                  <span
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    {music.year}
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Typography
                  className={`${classes.textGreen} ${classes.artistText}`}
                  variant="body1"
                >
                  {music.artist}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </CardContent>

          {/* <Grid container justify="space-between">
            <Grid item>
              <Button
                onClick={() => playThisSong(music)}
                size="medium"
                variant="text"
                style={{ color: "white" }}
              >
                <PlayArrow />
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={(music) => addToPlaylist(music)}
                size="medium"
                variant="text"
                style={{ color: "white" }}
              >
                <Add />
              </Button>
            </Grid>
          </Grid> */}
        </CardActionArea>
      </Card>
    </>
  );
}

export default CardMusic;
