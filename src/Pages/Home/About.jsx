import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <React.Fragment>
            <h2>About us</h2>
            <h4>What kinds of SEN do we provide for?</h4>
            <p className="justify">
                We are committed to ensuring 
                that all pupils achieve their potential, personally, socially, emotionally and academically 
                across all areas of the curriculum, regardless of their gender, ethnicity, social background 
                or religion.
            </p>
            <h3>Our Local Offers</h3>
            <ul>
                <li>
                    <a href="https://www.wisherefordshire.org/marketplace/cat/vendor/1776">Herefordshire County Council</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.wisherefordshire.org/marketplace/cat/vendor/1776">Staffordshire County Council</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://raw.githubusercontent.com/EllisCWells/WribbenhallFiles/master/Local%20Offer%20Worestershire.docx">More information (Download)</a>
                </li>
            </ul>
            <h3>Quick links:</h3>
            <Link to={{ pathname: '/contact', state: {form: "application"} }} className="link"><h4>Click here to make an application</h4></Link>
            <Link to='/policies'className="link"><h4>Click here to view our policies</h4></Link>
        </React.Fragment>
    );
}

export default About;
