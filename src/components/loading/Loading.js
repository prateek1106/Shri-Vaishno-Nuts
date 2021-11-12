import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Paper } from '@material-ui/core';

import useStyles from './styles';

const Loading = () => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.main}>
                <CircularProgress className={classes.loading}/>    
            </Paper> 
        </>
    )
}

export default Loading;