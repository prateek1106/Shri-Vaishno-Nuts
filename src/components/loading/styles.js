import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main: {
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: '0',
        backgroundColor: "black",
        
        opacity: "0.2"
    },
    loading: {
        zIndex: "999",
        color: "yellow",
        marginTop: "48vh", 
    }
}))