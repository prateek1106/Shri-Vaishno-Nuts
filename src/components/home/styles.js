import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background:'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
        width: '100%'
    },
    brandBox : {
        background: 'white'
    },
    brandName : {
        background: 'white',
        display: 'inline-block',
    },
    brandLogo: {
        background: 'black',
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    svnLogo: {
        height: '15vh',
        width: '15vh',
        objectFit: 'cover',
        [theme.breakpoints.down('xs')]: {
            height: '12vh',
            width: '12vh'
        }
    },
    brandText: {
        background: 'white',
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left',
        paddingLeft: '2vw',
    },
    brandHeading :{
        fontFamily: 'Poppins ,sans-serif',
        fontSize: '6vh',
        height: '6vh',
        color: 'rgba(161, 31, 31, 255)',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.5vh',
            height: '3.5vh'
        }
    },
    brandSubHeading: {
        fontFamily: 'Lato, serif',
        fontWeight: 'bold',
        fontSize: '2vh',
        color: 'rgba(161, 31, 31, 255)',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1vh',
        }
    },
    enquireBox : {
        background: 'white',
        paddingTop: '5vh',
        paddingLeft: '5vw',
        paddingRight: '5vw',
    },
    enquireText: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2vh',
        padding: '1vh',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2vh',
        }
    },
    enquireButton: {
        display: 'inline-block',
        paddingRight: '1vw',
        paddingLeft: '1vw',
    },
}))