import React from "react";
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo-black-white.png';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import InfoIcon from '@material-ui/icons/Info';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CategoryIcon from '@material-ui/icons/Category';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = () => {
    return(
        <div className="wrapper">
        <div className="footer-box row">
            <div className="quick-links col-md-12 col-lg-4">
                <div className="footer-links">
                    <b><h5>Quick Links</h5></b>
                    <br/> 
                    <HashLink to={'/#carousel'} className="footer-link" spy={true} smooth={true} >
                    <div className="footer-link-text">    
                    <PhotoSizeSelectActualIcon fontSize="small"/>&nbsp;
                    Glimpse
                    </div>
                    </HashLink>
                    <HashLink to={'/products'} className="footer-link" spy={true} smooth={true} >
                    <div className="footer-link-text">    
                    <CategoryIcon fontSize="small"/>&nbsp;
                    Our Products
                    </div>
                    </HashLink>
                    <HashLink to={'/#contactus'} className="footer-link" spy={true} smooth={true} >
                    <div className="footer-link-text">    
                    <ContactPhoneIcon fontSize="small"/>&nbsp;    
                    Contact Us
                    </div>
                    </HashLink>
                    <HashLink to={'/#enquiry'} className="footer-link" spy={true} smooth={true} >
                    <div className="footer-link-text">    
                    <FeedbackIcon fontSize="small"/>&nbsp;
                    Enquiry
                    </div>
                    </HashLink>
                    <HashLink to={'/#aboutus'} className="footer-link" spy={true} smooth={true} >
                    <div className="footer-link-text">    
                    <InfoIcon fontSize="small"/>&nbsp;
                    About Us
                    </div>
                    </HashLink>
                </div>
            </div>
            <div className="svn-logo col-md-12 col-lg-4">
                <div className="svn-logo-box">
                        <img className="logo-bw" src={logo} alt="svn-logo"/>
                        <br/>
                        Shri Vaishno Nuts Factory Private Limited
                </div>
            </div>
            <div className="contact-box col-md-12 col-lg-4">
                <div className="contact-info">
                <b><h5>Contact Us</h5></b>
                <br/>
                <LocationOnIcon fontSize="small"/>&nbsp;
                Plot No A-1/252-253, Swadeshi Compound, <br/>
                Kavi Nagar Industrial Area, Sector 17, <br/>
                Ghaziabad, Uttar Pradesh 201002, India
                <br/><br/>
                <CallIcon fontSize="small"/>&nbsp;shrivaishnonuts@gmail.com
                <br/>
                <MailIcon fontSize="small"/>Phone : +91 956 039 3902
                </div>
            </div>
        </div>
        <div className="end-strip row">
            <div className="end-strip-item col-xs-12 col-lg-6">
            Copyright <CopyrightIcon/> 2022 - Shri Vaishno Nuts
            </div>
            <div className="end-strip-item col-xs-12 col-lg-6">
                <div className="dev-line">Developed & Maintained by&nbsp;</div> 
                <div className="dev-line dev-name">Prateek Sharma</div>
            </div>
        </div>
        </div>
    )
}

export default Footer;