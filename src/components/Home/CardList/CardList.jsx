import { Grid, Container } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import Card from './Card/Card'

import kingslayer from '../../../assets/musics/kingslayer.mp3'

function CardList() {
    const [items, setItems] = useState([
        { id: uuidv4(), title: 'Kingslayer', year: 2013, artist: 'Bring Me The Horizon', file: kingslayer, albumArt: 'https://images-na.ssl-images-amazon.com/images/I/81PS%2B50RLDL._AC_UL600_SR600,600_.jpg' },
        { id: uuidv4(), title: 'It Never Ends', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://i5.walmartimages.com/asr/77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff' },
        { id: uuidv4(), title: 'Alligator Blood', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://i5.walmartimages.com/asr/77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff' },
        { id: uuidv4(), title: 'Doomed', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://i.pinimg.com/originals/55/8f/e2/558fe20a719d037b66e83a3df2095a03.jpg' },
        { id: uuidv4(), title: 'Shadow Moses', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://townsquare.media/site/366/files/2013/02/BMTH-Sempiternal.jpg?w=980&q=75' },
        { id: uuidv4(), title: '...And The Snake Start To Sing', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://townsquare.media/site/366/files/2013/02/BMTH-Sempiternal.jpg?w=980&q=75' },
        { id: uuidv4(), title: 'Happy Song', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://i.pinimg.com/originals/55/8f/e2/558fe20a719d037b66e83a3df2095a03.jpg' },
        { id: uuidv4(), title: 'Pray For Plagues', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://img.discogs.com/KQjKZZkLYMHze5YWpbSpDwAJNK4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3130244-1395524018-4337.jpeg.jpg' },
        { id: uuidv4(), title: 'Ludens', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://www.allthingsloud.com/wp-content/uploads/2020/10/121684527_10158824001498658_1054093839318648241_o.jpg' },
        { id: uuidv4(), title: 'A Lot Like Vegas', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://img.discogs.com/KQjKZZkLYMHze5YWpbSpDwAJNK4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3130244-1395524018-4337.jpeg.jpg' },
        { id: uuidv4(), title: 'Nihilist Blues', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://allstreaming.nl/media/music/2019-01-25-20%20-%20Bring%20Me%20the%20Horizon%20-%20Amo/cover.jpg' },
        { id: uuidv4(), title: 'Crucify Me (feat Light)', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://i5.walmartimages.com/asr/77b9a7d8-3c5e-4329-ac9d-a04bf59b1cf2_1.12db58afe9183f503089ce50d1c9f639.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff' },
        { id: uuidv4(), title: 'Dear Diary,', year: 2013, artist: 'Bring Me The Horizon', file: '', albumArt: 'https://images-na.ssl-images-amazon.com/images/I/81PS%2B50RLDL._AC_UL600_SR600,600_.jpg' },
    ])


    return (




        items.map(music => {
            return (
                <Grid item key={music.id}>
                    <Card music={music} />
                </Grid>
            )
        })




    )
}

export default CardList
