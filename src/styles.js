import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    home: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    home2: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
}))