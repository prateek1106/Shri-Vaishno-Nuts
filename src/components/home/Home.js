import React from 'react';
import logo from '../../images/back.png';
import useStyles from './styles';
import { HashLink } from 'react-router-hash-link';

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
                        <div className={classes.brandHeading}>
                            Factory Pvt Ltd
                        </div>
                        <br/>
                        <div className={classes.brandSubHeading}>
                            A Premium Quality Cashew Nuts Factory in Ghaziabad, NCR
                        </div>
                    </div>
                </div>

                <div className={classes.enquireBox}>
                    <div className={classes.enquireButton}>
                        <button className="btn btn-danger" style={{backgroundColor: 'rgba(161, 31, 31, 255)'}}>
                            <div className={classes.enquireText}>
                            <HashLink to={'/#contactus'} style={{ color: 'white', textDecoration: 'none'}} smooth={true}>Contact Us</HashLink>
                            </div>
                        </button>
                    </div>
                    <div className={classes.enquireButton}>
                        <button className="btn" style={{backgroundColor: 'rgba(161, 31, 31, 255)'}}>
                            <div className={classes.enquireText}>
                            <HashLink to={'/products'} style={{ color: 'white', textDecoration: 'none'}} smooth={true}>View Products</HashLink>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home