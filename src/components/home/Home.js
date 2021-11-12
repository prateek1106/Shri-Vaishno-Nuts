import React from 'react';
import { Paper, CardMedia } from '@material-ui/core';
import logo from '../../images/back.png';
import useStyles from './styles';
import { Link } from 'react-scroll';

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.brandBox}>
                <div className={classes.brandName}>
                    <div className={classes.brandLogo}>
                        <img className={classes.svnLogo} src={logo} alt="svn-logo"/>
                    </div>

                    <div className={classes.brandText}>

                        <div className={classes.brandHeading}>
                            Shri Vaishno Nuts
                        </div>

                        <div className={classes.brandSubHeading}>
                            A Premium Quality Cashew Nuts Factory in Ghaziabad, NCR
                        </div>
                    </div>
                </div>

                <div className={classes.enquireBox}>
                    <button className="btn btn-success">
                        <div className={classes.enquireText}>
                            <Link to="enquiry" spy={true} smooth={true}>Enquire</Link>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home