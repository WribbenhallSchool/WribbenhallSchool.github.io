import React from 'react';
import { useHistory } from "react-router-dom";

function PageNotFound(props) {
    //const queryString = window.location.href;
    //console.log(queryString)
    //const history = useHistory();
    //history.push(""); //On 404 just go to home page
    return (
        <div className="Page-Not-Found-Content">
            <div className="card">
                <h2>404 Page not found</h2>
                <h4>The page {window.location.href} does not exist</h4>
                <a href="https://wribbenhallschool.co.uk/">Go home</a>
            </div>
        </div>
    );
}

export default PageNotFound;