import React from 'react';
import { Paper, Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';

import useStyles from './styles';
import '../../App.css';
import d1 from '../../images/d1.png';
import d2 from '../../images/d2.png';

const Directors = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
        <div className="heading2">Directors</div>
        <hr style={{width:'20%'}}/>
            <Grid container justify="space-evenly" alignItems="center" className={classes.container}>
                <Grid container aligntItems="center" justify="space-evenly">
                    <Grid item xs={12} sm={6} className={classes.directorinner}> 
                        <div className="media">
                            <div className="media-body align-self-center text-center">
                                <div>
                                    <h5 class="mt-0">Shatanand Sharma</h5>
                                    <MailIcon fontSize="small"/>&nbsp;shatasharma@yahoo.com<br/>
                                    <CallIcon fontSize="small"/>&nbsp;9560393902
                                </div>
                            </div>
                            <img className={`${classes.img} align-self-start mr-3`} src={d1} alt="img" style={{borderRadius:'50%'}}/>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="space-evenly">
                    <Grid item xs={12} sm={6} className={classes.directorinner}>
                        <div class="media">
                            <img className={`${classes.img} align-self-start mr-3`} src={d2} alt="img" style={{borderRadius:'50%'}}/>
                            <div className="media-body align-self-center text-center">
                                <div>
                                    <h5 className="mt-0">Deepak Kansal</h5>
                                    <MailIcon fontSize="small"/>&nbsp;deepak_smvd@yahoo.com<br/>
                                    <CallIcon fontSize="small"/>&nbsp;9560393903
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Directors;