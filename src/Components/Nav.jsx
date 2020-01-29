import React from 'react';
import { Link } from 'react-router-dom';

import "./Nav.css";

function Nav(props) {
    //Hambuger click
    const handleHamburgerClick = () => {
        const hamburgerElem = document.getElementsByClassName("hamburger-container");
        hamburgerElem[0].classList.toggle("active");
        hamburgerElem[0].classList.toggle("hamburger-grow");

        document.getElementById("overlay").classList.toggle("showOverlay");
        document.getElementsByTagName("html")[0].classList.toggle("stop-scroll");
    }

    //Scrolls to clicked section
    const handleSectionClick = (index) => {
        props.scrollPage(props.sectionIDs[index])
    }

    //Closes menu when clicking away
    const handleBackgroundClick = () => {
        const hamburgerElem = document.getElementsByClassName("hamburger-container");
        hamburgerElem[0].classList.remove("active");

        document.getElementById("overlay").classList.remove("showOverlay");
        document.getElementsByTagName("html")[0].classList.remove("stop-scroll");
    }

    const handlePageClick = () => { handleHamburgerClick(); }

    return(
        <nav>
            <div className="hamburger-circle">
                <div className="hamburger-container topBtn" onClick={handleHamburgerClick}>
                    <div className="hamburger"></div>
                </div>
            </div>

            <div id="overlay" onClick={handleBackgroundClick} className={props.darkmode ? "Overlay-dark" : ""}>
                <div className="page-link-container">
                    <ul>
                        {props.pageNames.map((page, i) =>
                            <Link to={page[1]} key={i}><li onClick={handlePageClick} className={page[0] === props.currentPageName ? "page-names nav-active" : "page-names"}>{page[0]}</li></Link>
                        )}
                    </ul>
                </div>
                <div className="section-link-container">
                    <h4>Current page sections:</h4>
                    <ul>
                        {props.sectionNames.map((sectionName, i) =>
                            <li key={i} onClick={()=> handleSectionClick(i)} className={sectionName === props.currentSectionName ? "page-sections nav-active" : "page-sections"}>{sectionName}</li>
                        )}
                    </ul>
                </div>
            </div> 
        </nav>
    );

}

export default Nav;