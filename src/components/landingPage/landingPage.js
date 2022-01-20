import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Glimpse from '../glimpse/Glimpse';
import AboutUs from '../aboutus/AboutUs';
import Enquiry from '../enquiry/Enquiry';
import ContactUs from '../contactus/ContactUs';
import People from '../directors/Directors';
import { Grid, Paper } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

const landingPage = () => {
    return(
        <Grid xs={12}>
            <Navbar/>
            <div id="home">
                <Home/>
            </div>
            <div id="carousel">
                <Glimpse/>
            </div>
            <div id="aboutus">
                <AboutUs/>
            </div>
            <div id="people">
                <People/>
            </div>
            <div id="enquiry">
                <Enquiry/>
            </div>
            <div id="contactus">
                <ContactUs/>
            </div>
            <Paper className="text-center pt-2" style={{height:'50px'}}>
                    <CopyrightIcon/><span className="heading3" style={{fontSize: '15px'}}> &nbsp; 2020, Shri Vaishno Nuts Factory Pvt Ltd</span>
            </Paper>
      </Grid>
    )
}

export default landingPage;