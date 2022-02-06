import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'rgb(18, 64, 163)',
        color: 'white',
        zIndex: '99999'
    },
    navbarbutton: {
        float: 'right',
        height: '50px',
        outline: 'none !important',
        "&:hover": {
            color: '#ff652f'
        },
        [theme.breakpoints.down('sm')]: {
            display:'none'
        }
    },
    title: {
        float: 'left',
        height: '50px',
        outline: 'none !important',
        "&:hover": {
            color: '#ff652f'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    title2: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'inline'
        },
        height: '50px',
        float: 'right',
        outline: "none !important"
    },
    expand: {
        height: '50px',
        float: 'left',
        outline: 'none !important',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'inline',
            float: 'left'
        }
    },
    menu: {
        width:'100vh'
    },
    active: {
        borderBottom: '1px solid #ff652f',
        color: '#ff652f',
        "&:hover": {
            textDecoration: 'none',
            color: '#ff652f'
        }
    }
}))