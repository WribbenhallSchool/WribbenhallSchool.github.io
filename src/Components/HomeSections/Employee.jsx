import React from 'react';

function Employee(props) {
    return (
        <React.Fragment>
            <div className="staff">
                <img src={props.img} alt=""/>
                <h4>{props.name}</h4>
                <p>
                    {props.statement}
                </p>
            </div>
        </React.Fragment>
    );
}
 
export default Employee;