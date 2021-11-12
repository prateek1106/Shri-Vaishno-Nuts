import React,{ useState } from 'react';
import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';
import { Row } from 'reactstrap'; 
import axios from 'axios';
import useStyles from './styles';
import Loading from '../loading/Loading';

const Enquiry = () => {
    const classes = useStyles();
    const [ enquiry, setEnquiry ] = useState({
        name:'',
        contact:'',
        email:'',
        enquiry:'',
    })
    const [ load, setLoad ] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if( enquiry.name === '' || enquiry.contact === '' || enquiry.email === '' || enquiry.enquiry === '' ){
            alert('Kindly fill all the entries');
            return;
        }

        alert("Thank you for the enquiry");
        setEnquiry({
                name:'',
                contact:'',
                email:'',
                enquiry:''

            })

        /*setLoad(true)
        axios.post('https://shrivaishnopvtltdbackend.herokuapp.com/', enquiry)
        .then(res=> {
            alert("Thank you for the enquiry")
            setEnquiry({
                name:'',
                contact:'',
                email:'',
                enquiry:''

            })
            setLoad(false)
        })
        .catch((err) => {
            console.log(err)
            alert("There was an error, please try again")
            setLoad(false)
        })
        */
    }
    return (
        <Paper className={classes.root}>
            { (load === true)?<Loading/>:<div></div>}
            <div className="heading2">Enquiry</div>
            <hr style={{width:'20%'}}/>
            <Grid container justify="center" alignItems="center" className={classes.container}>
                <Grid item xs={10} sm={8} md={6}>
                <form name="enquiry" method="POST" data-netlify="true" autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Row className="text-center justify-content-center mb-4">
                            <Typography variant="h6" fullWidth>
                                Send us your enquiry by filling the form
                            </Typography>
                        </Row>
                        <Row className={classes.row}>
                            <TextField
                                variant="outlined" 
                                label="Name"
                                fullWidth
                                value={enquiry.name}
                                onChange={(e) => setEnquiry({...enquiry, name: e.target.value})}
                            />
                        </Row>
                        <Row className={classes.row}>
                            <TextField
                                variant="outlined" 
                                label="Contact No."
                                fullWidth
                                value={enquiry.contact}
                                onChange={(e) => setEnquiry({ ...enquiry, contact: e.target.value})}
                            />
                        </Row>
                        <Row className={classes.row}>
                            <TextField
                                variant="outlined" 
                                label="Email"
                                fullWidth
                                value={enquiry.email}
                                onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value})}
                            />
                        </Row>
                        <Row className={classes.row}>
                            <TextField
                                variant="outlined" 
                                multiline
                                rows={3}
                                label="Enquiry"
                                fullWidth
                                value={enquiry.enquiry}
                                onChange={(e) => setEnquiry({ ...enquiry, enquiry: e.target.value})}
                            />
                        </Row>
                        <Row>
                            <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                        </Row>
                    </form>
                </Grid>
            </Grid>           
        </Paper>
    )
}

export default Enquiry;