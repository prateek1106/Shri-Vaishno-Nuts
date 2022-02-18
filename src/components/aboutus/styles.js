import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background:'white',
        textAlign: 'center',
        borderRadius: '0',
        paddingTop: '70px',
        minHeight: '100vh',
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
            minHeight: '0',
            paddingTop: '20px',
            paddingBottom: '50px'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        margin: '5%'
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: '75vh'
        }
    },
    text: {
        [theme.breakpoints.up('md')]: {
            fontSize: 20
        }
    }
}))