import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
    return (
        <div className="Page-Not-Found-Content">
            <div className="card">
                <h2>Page not found</h2>
                <h3>The address {window.location.href} does not exist</h3>
                <br/>
                <h4>Avaiable pages:</h4>
                {props.pages.map((page, i) =>
                    <Link to={page.url} className="link" key={i + 1000}><h5>{page.name}</h5></Link>
                )}
                <br/>
                <a href="https://wribbenhallschool.co.uk/">Go home</a>
            </div>
        </div>
    );
}

export default PageNotFound;