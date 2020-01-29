import React from 'react';
import Map from '../Map';

function Details() {
    return (
        <React.Fragment>    
            <h2 style={{textAlign: "center"}}>Our details</h2>

            <div className="contact-details">
                <h4>Proprietor/Headteacher</h4>
                <ul>
                    <li>Mr Ellis Wells</li>
                    <li>ewells@wribbenhallschool.co.uk</li>
                    <li>Telephone: 01299 405383</li>
                </ul>
                <h4>Our Governor</h4>
                <ul>
                    <li>Mrs Linda Minnock</li>
                    <li>lminnock@wribbenhallschool.co.uk</li>
                </ul>

            </div>
        
            <div className="map"><Map /></div> {/* Google Map */}

            <br/>
        
            <div className="contact-details">
                <h4>Our address</h4>
                <ul>
                    <li>21 Crundalls Lane</li>
                    <li>Bewdley</li>
                    <li>Worcestershire</li>
                    <li>DY12 1JL</li>
                </ul>
            </div>

            <div style={{clear: "both"}}></div>
        </React.Fragment>
    );
}
 
export default Details;