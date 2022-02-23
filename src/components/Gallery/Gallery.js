import React from "react";
import './Gallery.css';
import logo1 from '../../images/nut-comic-1.png';
import logo2 from '../../images/nut-comic-2.png';
import logo3 from '../../images/nut-comic-3.png';

const Gallery = () => {
    return (
        <div className="gallery-box container-fluid">
            <div className="row">
                <div className="col-xs-12 col-md-4 center-div-box">
                    <div className="comic-image-box center-div-box">
                        <img className="nut-comic-image" src={logo1} alt="nut-comic-1"/> 
                    </div>
                </div>
                <div className="col-xs-12 col-md-4 center-div-box">
                    <div className="comic-image-box center-div-box">
                        <img className="nut-comic-image" src={logo2} alt="nut-comic-2"/>
                    </div> 
                </div>
                <div className="col-xs-12 col-md-4 center-div-box">
                    <div className="comic-image-box center-div-box">
                        <img className="nut-comic-image" src={logo3} alt="nut-comic-3"/> 
                    </div>
                </div>
            </div>
            <hr className="line"/>
        </div>
    )
}

export default Gallery;