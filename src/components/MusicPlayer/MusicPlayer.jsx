import { useState, useContext } from 'react';
import { AppContext } from '../../context/appContext';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import './style.css'

function MusicPlayer() {
    const [state, dispatch] = useContext(AppContext);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

    const handleClickPrevious = () => {
        setCurrentMusicIndex(prevState => prevState === 0 ? state.playlist.length - 1 : prevState - 1);
    }

    const handleClickNext = () => {
        setCurrentMusicIndex(prevState => prevState < state.playlist.length - 1 ? prevState + 1 : 0)
    }

    const handleEnd = () => {
        setCurrentMusicIndex(prevState => prevState === 0 ? state.playlist.length - 1 : prevState - 1);
    }

    return (
        <>
            <AudioPlayer
                style={{ backgroundColor: '#363954', color: '#03F387' }}
                layout="horizontal"
                // loop={true}
                handleLoop={true}
                onEnded={handleEnd}
                autoPlayAfterSrcChange={true}
                showSkipControls={true}
                showJumpControls={false}
                src={state.playlist[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </>
    )
}

export default MusicPlayer
