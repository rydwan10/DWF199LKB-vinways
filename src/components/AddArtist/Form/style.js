import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        '& .MuiInputBase-input': {
            color: 'white',
            backgroundColor: 'transparent',
            fontSize: '1.3rem'
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #26942b',
            width: '100%'
        },
        '& .MuiInputLabel-root': {
            display: 'block',
            color: 'white',
            fontWeight: '500',
        },
        '& .MuiInput-underline:before': {
            borderBottom: `2px solid black`,
            width: '0'
        }
    },
    form: {
        width: '100%',
        textAlign: 'left',
        color: '#FFFFFF',
        // marginTop: '2rem',
    },

    inputGroup: {
        marginBottom: '.8rem',
    },

    inputWrapper: {
        marginTop: '2rem'
    },
    inputField: {
        backgroundColor: 'rgb(51 51 70 / 75%) !important',
    },

    dropdownArtist: {
        backgroundColor: 'rgb(51 51 70 / 75%) !important',
        marginLeft: '1rem',
        color: 'black !important',
        width: '50%',
    },

    selectArtist: {
        color: 'black !important'
    },

    title: {
        color: '#03F387',
        fontWeight: 'bold',
        marginBottom: '2rem'
    },
    addMusicButton: {
        width: '50%',
        backgroundColor: '#03F387',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontFamily: 'Nunito',
        fontSize: '18px',
        marginTop: '2.3rem',
    },
    boldCompany: {
        fontWeight: 'bold'
    },
    greenText: {
        color: '#03F387'
    },
    inputFile: {

    },
    '#file-upload-button': {
        padding: '24px 25px'
    },
    [theme.breakpoints.down('sm')]: {
        root: {
            '& .MuiInputBase-input': {
                color: 'white',
                backgroundColor: 'transparent'
            },
            '& .MuiInput-underline:after': {
                borderBottom: '2px solid #26942b',
                width: '560px'
            },
            '& .MuiInputLabel-root': {
                display: 'block',
                color: 'white',
                fontWeight: '500',
            },
            '& .MuiInput-underline:before': {
                borderBottom: `2px solid black`,
                width: '0'
            }
        },
    },
    [theme.breakpoints.down('xs')]: {
        root: {
            '& .MuiInputBase-input': {
                color: 'white',
                backgroundColor: 'transparent'
            },
            '& .MuiInput-underline:after': {
                borderBottom: '2px solid #26942b',
                width: '250px'
            },
            '& .MuiInputLabel-root': {
                display: 'block',
                color: 'white',
                fontWeight: '500',
            },
            '& .MuiInput-underline:before': {
                borderBottom: `2px solid black`,
                width: '0'
            }
        },
    },
}))