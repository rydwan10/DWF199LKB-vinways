import { makeStyles } from '@material-ui/core';
import bgVector2x from '../../assets/bgVector2x.png';

export default makeStyles((theme) => ({
    mainContainer: {
        minWidth: '100%',
        minHeight: '100vh',
        backgroundColor: '#00031F',
        // backgroundImage: `url(${bgVector2x})`,
        backgroundRepeat: 'no-repeat'
    }
}))