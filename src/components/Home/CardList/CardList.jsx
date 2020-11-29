import React, { useState, useContext } from 'react'
import { AppContext } from '../../../context/appContext';
import { ADD_TO_PLAYLIST, SET_MODAL } from '../../../constant/actionTypes';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core'
import Card from './Card/Card'

import Modal from '../../Modal/Modal'

import kingslayer from '../../../assets/musics/kingslayer.mp3'
import deardiary from '../../../assets/musics/deardiary.mp3'
import doomed from '../../../assets/musics/doomed.mp3'
import itneverends from '../../../assets/musics/itneverends.mp3'
import shadowmoses from '../../../assets/musics/shadowmoses.mp3'

function CardList() {
    //eslint-disable-next-line
    const [items, setItems] = useState([
        { id: uuidv4(), title: 'Kingslayer', year: 2020, artist: 'Bring Me The Horizon', src: kingslayer, albumArt: 'https://images-na.ssl-images-amazon.com/images/I/81PS%2B50RLDL._AC_UL600_SR600,600_.jpg' },
        { id: uuidv4(), title: 'Dear Diary,', year: 2020, artist: 'Bring Me The Horizon', src: deardiary, albumArt: 'https://images-na.ssl-images-amazon.com/images/I/81PS%2B50RLDL._AC_UL600_SR600,600_.jpg' },
        { id: uuidv4(), title: 'It Never Ends', year: 2010, artist: 'Bring Me The Horizon', src: itneverends, albumArt: 'https://i5.walmartimages.com/asr/77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff' },
        { id: uuidv4(), title: 'Doomed', year: 2015, artist: 'Bring Me The Horizon', src: doomed, albumArt: 'https://i.pinimg.com/originals/55/8f/e2/558fe20a719d037b66e83a3df2095a03.jpg' },
        { id: uuidv4(), title: 'Shadow Moses', year: 2013, artist: 'Bring Me The Horizon', src: shadowmoses, albumArt: 'https://img.discogs.com/tk33jf264KkKKh5fJ6NNVBRqI80=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9201806-1476561754-2674.jpeg.jpg' },
        { id: uuidv4(), title: 'Pray For Plagues', year: 2006, artist: 'Bring Me The Horizon', src: '', albumArt: 'https://img.discogs.com/KQjKZZkLYMHze5YWpbSpDwAJNK4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3130244-1395524018-4337.jpeg.jpg' },
        { id: uuidv4(), title: 'Ludens', year: 2020, artist: 'Bring Me The Horizon', src: '', albumArt: 'https://www.allthingsloud.com/wp-content/uploads/2020/10/121684527_10158824001498658_1054093839318648241_o.jpg' },
        { id: uuidv4(), title: 'A Lot Like Vegas', year: 2006, artist: 'Bring Me The Horizon', src: '', albumArt: 'https://img.discogs.com/KQjKZZkLYMHze5YWpbSpDwAJNK4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3130244-1395524018-4337.jpeg.jpg' },
        { id: uuidv4(), title: 'Nihilist Blues', year: 2019, artist: 'Bring Me The Horizon', src: '', albumArt: 'https://allstreaming.nl/media/music/2019-01-25-20%20-%20Bring%20Me%20the%20Horizon%20-%20Amo/cover.jpg' },
        { id: uuidv4(), title: 'Crucify Me (feat Light)', year: 2010, artist: 'Bring Me The Horizon', src: '', albumArt: 'https://i5.walmartimages.com/asr/77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff' },
    ])

    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const handleAddToPlaylist = (music) => {
        if (state.currentUser.isMember) {
            dispatch({ type: ADD_TO_PLAYLIST, payload: { music: music } })
        } else if (state.currentUser.isMember === false) {
            dispatch({ type: SET_MODAL, payload: { isOpen: true, message: 'To continue please complete the payment' } });
            setTimeout(() => {
                router.push('/pay')
            }, 2000)
        }
    }

    return (
        <>
            <Modal />
            {items.map(music => {
                return (
                    <Grid item key={music.id}>
                        <Card music={music} handleAddToPlaylist={handleAddToPlaylist} />
                    </Grid>
                )
            })}
        </>
    )
}

export default CardList
