import React, { useState } from 'react';
import { AppBar, Drawer, Button, Grid } from '@material-ui/core';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CloseIcon from '@material-ui/icons/Close';
import { HashLink } from 'react-router-hash-link';

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
                            <Button className={classes.expand} onClick={openDrawer}>
                                <MenuSharpIcon fontSize="large" style={{color: 'white'}}/></Button>                        
                        :
                            <Button className={classes.expand} onClick={closeDrawer}>
                                <CloseIcon fontSize="large" style={{color: 'white'}}/></Button>
                        }
                        <Drawer open={anchor} onClose={closeDrawer}>
                            <Sidebar closeDrawer={closeDrawer}/>
                        </Drawer>
                    </Grid>
                    <Grid item>
                        <Button className={classes.title} color="inherit">
                        <HashLink to={'/#home'} style={{color: 'white' , textDecoration: 'none'}} spy={true} smooth={true} >
                                <span className="heading" style={{color:'white'}}>Shri Vaishno</span>
                        </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.title2} color="inherit">
                        <HashLink to={'/#homeM'} style={{color: 'white' , textDecoration: 'none'}} spy={true} smooth={true} >
                                <span className="heading" style={{color:'white'}}>Shri Vaishno</span>
                        </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit">
                            <HashLink to={'/#contactus'} style={{color: 'white' }} spy={true} smooth={true} >
                                <span className="heading3">Contact us</span>
                            </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit">
                        <HashLink to={'/#enquiry'} style={{color: 'white' }} spy={true} smooth={true} >
                                <span className="heading3">Enquiry</span>
                        </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit">
                        <HashLink to={'/#people'} style={{color: 'white' }} spy={true} smooth={true} >
                                <span className="heading3">Directors</span>
                        </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit">
                        <HashLink to={'/products'} style={{color: 'white' }} spy={true} smooth={true} >
                                <span className="heading3">Our Products</span>
                         </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit">
                        <HashLink to={'/#aboutus'} style={{color: 'white' }} spy={true} smooth={true} >
                                <span className="heading3">About us</span>
                        </HashLink>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.navbarbutton} color="inherit">
                        <HashLink to={'/#carousel'} style={{color: 'white' }} spy={true} smooth={true} >
                                <span className="heading3">Glimpse</span>
                        </HashLink>
                        </Button>
                    </Grid>
                </Grid>
            </AppBar>
        
    )
}

export default Navbar;