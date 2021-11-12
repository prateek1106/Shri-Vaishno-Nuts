import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background:'#EDFFE4',
        textAlign: 'center',
        borderRadius: '0',
        paddingTop: '70px',
        minHeight: '100vh',
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
            height: '80vh',
            marginTop: '50px'
        }
    },
    directorinner: {
        padding: '20px',
        textAlign: 'left'
    },
    img: {
        [theme.breakpoints.up('md')]: {
            height: '200px',
            width: '200px'
        },
        [theme.breakpoints.down('md')]: {
            height: '150px',
            widht: '150px'
        },
        [theme.breakpoints.down('sm')]: {
            height: '100px',
            widht: '100px'
        }
    }
}))