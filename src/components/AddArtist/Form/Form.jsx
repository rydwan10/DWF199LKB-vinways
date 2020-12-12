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
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import CalendarTodayOutlined from "@material-ui/icons/CalendarTodayOutlined";
import SupervisedUserCircleOutlined from "@material-ui/icons/SupervisedUserCircleOutlined";
import AccessAlarmRounded from "@material-ui/icons/AccessAlarmRounded";

import makeStyles from "./style";
import attachThumbnail from "../../../assets/icons/attachThumbnail.svg";

function Form() {
  const [thumbnail, setThumbnail] = useState(null);
  const classes = makeStyles();

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
    >
      <Typography className={classes.title} variant="h5">
        Add Artist
      </Typography>

      <div className={classes.inputWrapper}>
        <Grid container className={classes.inputGroup} alignItems="flex-end">
          <Grid
            container
            item
            spacing={2}
            alignItems="center"
            justify="flex-start"
            sm={8}
          >
            <Grid item>
              <PeopleOutline fontSize="large" style={{ color: "white" }} />
            </Grid>
            <Grid style={{ width: "70%" }} item>
              <TextField
                size="small"
                className={classes.inputField}
                variant="outlined"
                style={{ width: "100%" }}
                placeholder="name"
              />
            </Grid>
          </Grid>

          <Grid item>
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

          <Grid item style={{ marginLeft: "3rem" }}>
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
            <Grid style={{ width: "80%" }} item>
              <TextField
                size="small"
                className={classes.inputField}
                variant="outlined"
                style={{ width: "117%" }}
                placeholder="Old"
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
          <Grid style={{ width: "80%" }} item>
            <FormControl
              size="small"
              variant="outlined"
              className={classes.dropdownArtist}
            >
              <Select classNames={classes.selectArtist} displayEmpty>
                <MenuItem value="" disabled>
                  Choose artist type
                </MenuItem>
                <MenuItem value="Solo">Solo</MenuItem>
                <MenuItem value="Group">Group</MenuItem>
                <MenuItem value="Band">Band</MenuItem>
                <MenuItem value="Indie">Indie</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.inputGroup}
          item
          spacing={2}
          alignItems="center"
          justify="flex-start"
          sm={8}
        >
          <Grid item>
            <AccessAlarmRounded fontSize="large" style={{ color: "white" }} />
          </Grid>
          <Grid style={{ width: "90%" }} item>
            <TextField
              size="small"
              className={classes.inputField}
              variant="outlined"
              style={{ width: "156.6%" }}
              placeholder="Start a Carrer"
            />
          </Grid>
        </Grid>
      </div>

      <Grid container justify="center">
        <Button
          className={classes.addMusicButton}
          size="medium"
          variant="contained"
        >
          Add Artist
        </Button>
      </Grid>
    </form>
  );
}

export default Form;
