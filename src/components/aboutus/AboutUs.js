import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

import useStyles from './styles';
import '../../App.css'

const AboutUs = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
        <div className="heading2">About us</div>
        <hr style={{width:'20%'}}/>
            <Grid container alignItems="center" justify="space-evenly" className={classes.container}>
                <Grid item xs={10} sm={5}>
                    <Typography  className={`${classes.text} mb-5`} variant="body1" component="h2"> 
                    Shree Vaishno Nuts are the foremost processors of best quality raw cashew nuts and all types of flavoured cashew nuts. Our long range vision is to become the leading global supplier of healthful, nutritious fresh cashew and cashew related products.
                    </Typography>
                    <Typography variant="body1" className={classes.text} component="h2">
                    Our mission is to process best quality cashew nuts with our fully automatic advanced facilities and well trained staff. we are dedicated to exceed the expectations of food safety and quality standards. along with current and future needs of our consumers health and taste simultaneously.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AboutUs;