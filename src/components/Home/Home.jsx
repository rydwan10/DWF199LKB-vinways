import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";

import { Container, Grid } from "@material-ui/core";

// importing needed components
import Carousel from "./Carousel/Carousel";
import CardList from "./CardList/CardList";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

// style
import makeStyles from "./style";
function Home() {
  const [state, dispatch] = useContext(AppContext);
  // Music player
  const [playIndex, setPlayIndex] = useState(0);
  const { playlist } = state;
  const classes = makeStyles();

  return (
    <div className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Carousel />
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="stretch"
            spacing={3}
            item
            lg={12}
            md={12}
          >
            <CardList />
          </Grid>
          <Grid container>
            <Grid item style={{ width: "100%" }}>
              {/* {state.playlist.length > 0 ? (<MusicPlayer />) : (<div></div>)} */}
              <MusicPlayer
                playlist={playlist}
                playIndex={playIndex}
                setPlayIndex={setPlayIndex}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
