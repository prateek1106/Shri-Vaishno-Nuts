import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import Glimpse from '../glimpse/Glimpse';
import AboutUs from '../aboutus/AboutUs';
import Enquiry from '../enquiry/Enquiry';
import ContactUs from '../contactus/ContactUs';
import People from '../directors/Directors';
import { Grid, Paper } from '@material-ui/core';
import Footer from '../Footer/Footer';
import Importers from '../Importers/Importers';
import Gallery from '../Gallery/Gallery';

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
            <div id="importers">
                <Importers/>
    </div>
            <div className='gallery'>
                <Gallery/>
            </div>
            {/*<div id="people">
                <People/>
            </div>*/}
            <div id="enquiry">
                <Enquiry/>
            </div>
            <div id="contactus">
                <ContactUs/>
            </div>
            <Footer/>
      </Grid>
    )
}

export default landingPage;