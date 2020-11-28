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
        textAlign: 'center',
        color: '#FFFFFF',
        // marginTop: '2rem',
    },
    inputWrapper: {
        marginTop: '2rem'
    },
    loginTitle: {
        color: '#03F387',
        fontWeight: 'bold',
        marginBottom: '2rem'
    },
    sendButton: {
        width: '100%',
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