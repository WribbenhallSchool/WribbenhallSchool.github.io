import React from "react";

import './dots.css'

function Dots(props) {

    const getDotIndex = (dotID) => {
        let dotIndex = -1;
        props.dots.forEach((elem, counter) => {
            if(elem.id === dotID){
                dotIndex = counter;
            }
        })
        return dotIndex;
    }

    const handleDotClick = (e) => {
        const dotIndex = getDotIndex(e.currentTarget.id);
        const pageID = props.sectionIDs[dotIndex];
        props.scrollPage(pageID);
    }

    

    return (
        <div className="dot-container">
            <ul className={props.darkmode ? "dot-list dot-list-dark" : "dot-list"}>
                {props.dots.map((dot, i) => {
                    return (
                        props.showDots ? 
                            <div className="tooltip" key={dot.id}>
                                <li onClick={handleDotClick} className={dot.active ? "active" : ""} id={dot.id} >
                                    <p></p>
                                    <span className="tooltiptext">{props.sectionNames[i]}</span>
                                </li>
                            </div>
                        : null
                    );
                })}
            </ul>
        </div>
    );
}

export default Dots;