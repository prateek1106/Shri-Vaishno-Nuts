import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background:'rgb(224, 246, 255)',
        textAlign: 'center',
        borderRadius: '0',
        paddingTop: '70px',
        minHeight: '120vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '100vh'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '0',
            paddingTop: '20px',
            paddingBottom: '50px'
        }
    },
    container: {
        [theme.breakpoints.up('md')]: {
            height: '90vh'
        },
        [theme.breakpoints.up('sm')]: {
            height: '70vh'
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        }
    },
    img: {
        height: 'auto'
    }
}))