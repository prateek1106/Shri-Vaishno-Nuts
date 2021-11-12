import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navbarbutton: {
        height: '50px',
        outline: 'none !important',
        "&:hover": {
            color: '#ff652f'
        },
        "&:hover": {
            textDecoration: 'none',
            color: '#ff652f'
        }
    },
    div: {
        width: '60vw',
        paddingTop: '60px',
        [theme.breakpoints.down('sm')]: {
            width: '80vw'
        }
    },
    list: {
        padding:0
    },
    active: {
        color: '#ff652f',
        "&:hover": {
            textDecoration: 'none',
            color: '#ff652f'
        }
    }
}))