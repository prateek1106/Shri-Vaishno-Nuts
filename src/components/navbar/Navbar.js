import React, { useState } from 'react';
import { AppBar, Drawer, Button, Grid } from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-scroll';

import useStyles from './styles';
import '../../App.css';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(false);

    const openDrawer = (e) => {
        if ( e.type === 'keydown' && ( e.type=== 'Tab' || e.type === 'Shift')){
            return;
        }
        setAnchor(true);
    }
    const closeDrawer = (e) => {
        if ( e.type === 'keydown' && ( e.type === 'Tab' || e.type === 'Shift')){
            return;
        }
        setAnchor(false);
    }
    return (
            <AppBar className={classes.root} position="sticky" style={{height:'50px'}}>
                <Grid>
                    <Grid item>
                        {(anchor === false)?
                            <Button className={classes.expand} onClick={openDrawer}><MenuSharpIcon fontSize="large" style={{color: 'white'}}/></Button>                        
                        :
                            <Button className={classes.expand} onClick={closeDrawer}><CloseIcon fontSize="large" style={{color: 'white'}}/></Button>
                        }
                        <Drawer open={anchor} onClose={closeDrawer}>
                            <Sidebar closeDrawer={closeDrawer}/>
                        </Drawer>
                    </Grid>
                    <Grid item>
                        <Button className={classes.title} color="inherit"><Link to="home" spy={true} smooth={true}><span className="heading" style={{color:'white'}}>Shri Vaishno</span></Link></Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.title2} color="inherit"><Link to="homeM" spy={true} smooth={true}><span className="heading" style={{color:'white'}}>Shri Vaishno</span></Link></Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit"><Link to="contactus" activeClass={classes.active} spy={true} smooth={true}><span className="heading3">Contact us</span></Link></Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit"><Link to="enquiry" activeClass={classes.active} spy={true} smooth={true}><span className="heading3">Enquiry</span></Link></Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit"><Link to="people" activeClass={classes.active} spy={true} smooth={true}><span className="heading3">Directors</span></Link></Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit"><Link to="aboutus" activeClass={classes.active} spy={true} smooth={true}><span className="heading3">About us</span></Link></Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit"><Link to="carousel" activeClass={classes.active} spy={true} smooth={true}><span className="heading3">Glimpse</span></Link></Button>
                    </Grid>
                </Grid>
            </AppBar>
        
    )
}

export default Navbar;