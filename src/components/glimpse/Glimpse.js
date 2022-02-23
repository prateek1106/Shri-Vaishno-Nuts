import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { Carousel } from 'react-bootstrap';

import useStyles from './styles';
import '../../App.css'

import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
import pic4 from '../../images/pic4.png';
import pic7 from '../../images/pic7.png';

const Glimpse = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className="heading2"><b>A glimpse</b></div>
            <hr style={{width:'20%'}} className="mb-5"/>
            <Grid container alignItems="center" justify="center" className={classes.container}>
                <Grid xs={12} sm={10} md={8} item>
                

                    <Carousel keyboard={true} interval={2000} slide={true} indicators={false} className="m-auto">
                        <Carousel.Item className={classes.img}>
                            <img src={pic1} className="d-block w-100"/>
                        </Carousel.Item>
                        <Carousel.Item className={classes.img}>
                            <img src={pic2} className="d-block w-100"/>
                        </Carousel.Item>
                        <Carousel.Item className={classes.img}>
                            <img src={pic3} className="d-block w-100"/>
                        </Carousel.Item>
                        <Carousel.Item className={classes.img}>
                            <img src={pic4} className="d-block w-100"/>
                        </Carousel.Item>
                        <Carousel.Item className={classes.img}>
                            <img src={pic7} className="d-block w-100"/>
                        </Carousel.Item>
                    </Carousel>


                </Grid>
            </Grid>
        </Paper>
    )
}

export default Glimpse;