import React, { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import BookOutlined from "@material-ui/icons/BookOutlined";
import CalendarTodayOutlined from "@material-ui/icons/CalendarTodayOutlined";
import SupervisedUserCircleOutlined from "@material-ui/icons/SupervisedUserCircleOutlined";

import attachThumbnail from "../../../assets/icons/attachThumbnail.svg";

import makeStyles from "./style";

function Form() {
  const [thumbnail, setThumbnail] = useState(null);
  // eslint-disable-next-line
  const [audio, setAudio] = useState(null);

  const classes = makeStyles();

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
    >
      <Typography className={classes.title} variant="h5">
        Add Music
      </Typography>

      <div className={classes.inputWrapper}>
        <Grid container className={classes.inputGroup} alignItems="flex-end">
          <Grid
            container
            item
            spacing={2}
            alignItems="center"
            justify="flex-start"
            sm={6}
          >
            <Grid item>
              <BookOutlined fontSize="large" style={{ color: "white" }} />
            </Grid>
            <Grid style={{ width: "80%" }} item>
              <TextField
                size="small"
                className={classes.inputField}
                variant="outlined"
                style={{ width: "100%" }}
                placeholder="Song Title"
              />
            </Grid>
          </Grid>

          <Grid item sm={3}>
            <Grid style={{ width: "100%" }} item>
              <input
                onChange={(e) =>
                  setThumbnail(URL.createObjectURL(e.target.files[0]))
                }
                accept="image/*"
                className={classes.input}
                style={{ display: "none" }}
                id="file-input-thumbnail"
                multiple
                type="file"
              />
              <div>
                <label
                  htmlFor="file-input-thumbnail"
                  className={classes.fileInputButton}
                >
                  Attach Thumbnail
                  <img src={attachThumbnail} alt="attachThumbnail-icon" />
                </label>
              </div>
            </Grid>
          </Grid>

          <Grid item>
            {thumbnail ? (
              <img src={thumbnail} alt="preview" width="128px" />
            ) : (
              <div
                style={{
                  width: "128px",
                  height: "128px",
                  backgroundColor: "rgb(51 51 70 / 75%)",
                }}
              ></div>
            )}
          </Grid>
        </Grid>

        <Grid container className={classes.inputGroup}>
          <Grid
            container
            item
            spacing={2}
            alignItems="center"
            justify="flex-start"
            sm={12}
          >
            <Grid item>
              <CalendarTodayOutlined
                fontSize="large"
                style={{ color: "white" }}
              />
            </Grid>
            <Grid style={{ width: "70%" }} item>
              <TextField
                size="small"
                className={classes.inputField}
                variant="outlined"
                style={{ width: "131%" }}
                placeholder="Year"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.inputGroup} alignItems="center">
          <Grid item>
            <SupervisedUserCircleOutlined
              fontSize="large"
              style={{ color: "white" }}
            />
          </Grid>
          <Grid style={{ width: "90%" }} item>
            <FormControl
              size="small"
              variant="outlined"
              className={classes.dropdownArtist}
            >
              <Select className={classes.selectArtist}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container>
          <Grid style={{ width: "100%", marginLeft: "3.5rem" }} item>
            <input
              onChange={(e) => setAudio(URL.createObjectURL(e.target.files[0]))}
              className={classes.input}
              style={{ display: "none" }}
              id="file-input-audio"
              multiple
              type="file"
            />
            <div>
              <label
                htmlFor="file-input-audio"
                className={classes.fileInputAudio}
              >
                Attach Audio
              </label>
            </div>
          </Grid>
        </Grid>
      </div>

      <Grid container justify="center">
        <Button
          className={classes.addMusicButton}
          size="medium"
          variant="contained"
        >
          Add Music
        </Button>
      </Grid>
    </form>
  );
}

export default Form;
