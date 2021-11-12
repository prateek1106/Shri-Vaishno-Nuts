import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        background:'white',
        textAlign: 'center',
        borderRadius: '0',
        paddingTop: '70px',
        paddingBottom: '100px',
        minHeight: '80vh',
        [theme.breakpoints.down('sm')]: {
            minHeight: '0',
            paddingTop: '20px',
            paddingBottom: '50px'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: '70vh'
        }
    },
    row: {
        marginBottom: '30px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '10px'
        }
    },
    buttonSubmit: {
        outline: "none !important"
    }
}))