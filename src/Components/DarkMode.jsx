import React, { useEffect } from 'react';

import "./backgrounds.css";

function ApplyMode(darkmode) {

    if(darkmode){
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";

        let buttons = document.getElementsByClassName("topBtn");
        for (let button of buttons) button.classList.add("topBtn-dark");

        let cards = document.getElementsByClassName("card");
        for (let card of cards) card.classList.add("card-dark");

    }else{
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";

        let buttons = document.getElementsByClassName("topBtn");
        for (let button of buttons) button.classList.remove("topBtn-dark");

        let cards = document.getElementsByClassName("card");
        for (let card of cards) card.classList.remove("card-dark");
    }
}

let oldProps = { darkmode: null, currentPageName: ""} ;

//return true if props have changed
function checkState(props){
    if (props.darkmode !== oldProps.darkmode) return true;
    if (oldProps.currentPageName !== props.currentPageName) return true;
    return false;
}

function Moon(props) {
    
    useEffect(() => {
        if( checkState(props) ){
            ApplyMode(props.darkmode);
            oldProps = {darkmode: props.darkmode, currentPageName: props.currentPageName};
        }
    })
    
    return (
        <div className="dark-mode-button topBtn" onClick={props.handleClick}>
            {props.darkmode === true ? 
                <img src={require("../Images/moonDark.png")} alt="moon"/> 
                : <img src={require("../Images/moonLight.png")} alt="moon"/>
            }
        </div>
    );

}

export default Moon;
