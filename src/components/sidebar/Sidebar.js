import React from 'react';
import { Link } from 'react-scroll';
import { List, ListItem, Divider } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import CategoryIcon from '@material-ui/icons/Category';

import useStyles from './styles';
import '../../App.css';

const Sidebar = ({ closeDrawer }) => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <List className={classes.list}>
                <Link to="carousel" activeClass={classes.active} spy={true} smooth={true}>
                    <ListItem button className={`${classes.navbarbutton} justify-content-center`} onClick={closeDrawer}>
                        <span className="heading3"><PhotoSizeSelectActualIcon fontSize="small"/>&nbsp;Glimpse</span>
                    </ListItem>
                </Link>
                <Link to="aboutus" activeClass={classes.active} spy={true} smooth={true}>
                    <ListItem button className={`${classes.navbarbutton} justify-content-center`} onClick={closeDrawer}>
                        <span className="heading3"><InfoIcon fontSize="small"/>&nbsp;About us</span>
                    </ListItem>
                </Link>
                <RouterLink to="/products" style={{color: 'black',textDecoration: 'none' }} activeClass={classes.active} spy={true} smooth={true}>
                    <ListItem button className={`${classes.navbarbutton} justify-content-center`} onClick={closeDrawer}>
                        <span className="heading3"><CategoryIcon fontSize="small"/>&nbsp;Our Products</span>
                    </ListItem>
                </RouterLink>
                <Link to="people" activeClass={classes.active} spy={true} smooth={true}>
                    <ListItem button className={`${classes.navbarbutton} justify-content-center`} onClick={closeDrawer}>
                        <span className="heading3"><PeopleIcon fontSize="small"/>&nbsp;Directors</span>
                    </ListItem>
                </Link>
                <Link to="enquiry" activeClass={classes.active} spy={true} smooth={true}>
                    <ListItem button className={`${classes.navbarbutton} justify-content-center`} onClick={closeDrawer}>
                        <span className="heading3"><FeedbackIcon fontSize="small"/>&nbsp;Enquiry</span>
                    </ListItem>
                </Link>
                <Link to="contactus" activeClass={classes.active} spy={true} smooth={true}>
                    <ListItem button className={`${classes.navbarbutton} justify-content-center`} onClick={closeDrawer}>
                        <span className="heading3"><ContactPhoneIcon fontSize="small"/>&nbsp;Contact us</span>
                    </ListItem>
                </Link>    
                <Divider style={{marginBottom: '10px', marginTop: "10px"}}/>
                <ListItem className="justify-content-center align-items-end">
                    <MailIcon fontSize="small"/>&nbsp;shrivaishnonuts@gmail.com
                </ListItem>
                <ListItem className="justify-content-center">
                    <CallIcon fontSize="small"/>&nbsp;9560393902
                </ListItem>
            </List>
        </div>
    )
}

export default Sidebar;