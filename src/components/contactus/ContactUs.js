import React from 'react';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';
import map from '../../images/Annotation 2020-11-21 025717.png'

const ContactUs = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className="heading2">Contact us</div>
            <hr style={{width:'20%'}}/>
            <Grid container justify="space-evenly" alignItems="center" className={classes.container} >
                <Grid container xs={10} sm={8} alignItems="center" justify="space-evenly">
                    <Grid xs={12} md={5}>
                        <Typography className={classes.info} variant="body1"><span><MailIcon/></span>&nbsp;shrivaishnonuts@gmail.com</Typography>   
                    </Grid>
                    <Grid xs={12} md={5}>
                        <Typography className={classes.info} variant ="body1"><span><CallIcon/></span>&nbsp;9560393902</Typography>                                     
                    </Grid>
                </Grid>
                <Grid item xs={10} sm={8} className={classes.img}>
                    <a target="_blank" href="https://www.google.com/maps/place/Shri+Vaishno+Nuts+Factory+Pvt+Ltd/@28.6569862,77.454046,17z/data=!4m5!3m4!1s0x390cf123d95c0ffd:0x54f82830826593a5!8m2!3d28.6570888!4d77.456242" target="_blank" ><img height="100%" width="100%" src={map} alt="img"/></a>
                </Grid>
                <Grid container justify="space-evenly" alignItems="center" xs={10} sm={8}>
                    <Grid item xs={12} md={5} style={{marginBottom:'10px'}}>
                            <Button disabled className="bg-primary" style={{color: 'white', height: '100%'}}>
                                <Typography variant="body2">Plot No A-1/252-253, Swadeshi Compound, Kavi Nagar Industrial Area, Sector 17, Ghaziabad, Uttar Pradesh - 201002</Typography>                            
                            </Button>
                    </Grid>
                    <Grid container xs={12} md={3} style={{marginBottom:'10px'}}>
                        <Grid item xs={12} style={{marginBottom: '10px'}}>
                            <Button className="bg-success" fullWidth fullHeight style={{color:'white'}}><a href="mailto:shrivaishnonuts@gmail.com" style={{textDecoration: 'none', color: 'white'}}><span><MailIcon/></span>&nbsp;Send mail</a></Button>
                        </Grid>
                        <Grid iteme xs={12} style={{marginBottom:'10px'}}>
                            <Button className="bg-danger" fullWidth style={{color:'white'}}><a href="tel:+919560393902" style={{textDecoration: 'none', color: 'white'}}><span><CallIcon/></span>&nbsp; Call us</a></Button>
                        </Grid>
                    </Grid>
                    
                </Grid>
                
            </Grid>
        </Paper>
    )
}

export default ContactUs