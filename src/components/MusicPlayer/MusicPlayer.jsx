import { useState, useRef, useEffect } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import kingslayer from '../../assets/musics/kingslayer.mp3'
import deardiary from '../../assets/musics/deardiary.mp3'

import './style.css'

function MusicPlayer() {
    const [playlist, setPlaylist] = useState([
        { name: 'Kingslayer', src: kingslayer },
        { name: 'Dear Diary,', src: deardiary },
    ]);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

    const Player = useRef(null)
    // console.log(Player.current.props);
    // console.log(Player.current.props.loop === true);
    useEffect(() => {



    }, [currentMusicIndex])

    const handleClickPrevious = () => {
        setCurrentMusicIndex(prevState => prevState === 0 ? playlist.length - 1 : prevState - 1);
    }

    const handleClickNext = () => {
        setCurrentMusicIndex(prevState => prevState < playlist.length - 1 ? prevState + 1 : 0)
    }

    const handleEnd = () => {
        setCurrentMusicIndex(prevState => prevState === 0 ? playlist.length - 1 : prevState - 1);
    }

    return (
        <>
            <AudioPlayer
                style={{ backgroundColor: '#363954', color: '#03F387' }}
                ref={Player}
                layout="horizontal"
                // loop={true}
                handleLoop={true}
                onEnded={handleEnd}
                autoPlayAfterSrcChange={true}
                showSkipControls={true}
                showJumpControls={false}
                src={playlist[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </>
    )
}

export default MusicPlayer
