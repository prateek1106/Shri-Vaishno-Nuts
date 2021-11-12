import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background:'#EDFFE4',
        textAlign: 'center',
        borderRadius: '0',
        paddingTop: '70px',
        [theme.breakpoints.down('sm')]: {
            minHeight: '0',
            paddingTop: '20px',
            paddingBottom: '50px'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: '100vh',
            marginTop: '50px',
        }
    },
    img: {
        [theme.breakpoints.down('xs')]: {
            height: '35vh',
            marginBottom: '10px'
        },
        [theme.breakpoints.up('sm')]: {
            height: '50vh'
        },
        [theme.breakpoints.up('md')]: {
            height: '65vh'
        },
        border: '1px solid black'
    },
    info: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px'
        }
    }
}))