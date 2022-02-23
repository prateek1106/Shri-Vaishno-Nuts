import React from "react";
import './Importers.css';
import logo from '../../images/africa-map.png';

const Importers = () => {
    return(
        <div className="importers-wrapper container-fluid">
        
            <div className="row">
                <div className="col-xs-12 col-md-6 africa-map-box center-div-box">
                    <img className="africa-map" src={logo} alt="africa-map"/>
                </div>
                <div className="col-xs-12 col-md-6 importers-text-box center-div-box">
                    <div className="importers-text">  
                        <span>We are</span>&nbsp; <span className="text-36">Importers</span>&nbsp; and <br/>
                        <span className="text-36">Processors</span> <br/>
                        <span>of</span>&nbsp;&nbsp;<span className="text-34">Raw Cashew Nuts</span> <br/>
                        <span>of</span>&nbsp;&nbsp;<span className="text-34">West African Countries</span> <br/>
                        i.e.  <br/>
                        Benin, Tanzania, Ghana, <br/>
                        Mozambique, Ivory Coast, <br/>
                        Ginnie Bissau, etc.<br/>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Importers;