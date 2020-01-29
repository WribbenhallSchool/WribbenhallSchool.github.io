import React from 'react';

function Staff() {
    return (
        <React.Fragment>
            <div className="staff-info">
                <h2 style={{textAlign: "center"}}>Our Staff</h2>
                <div className="staff-images-container">
                    <div className="staff-images staff1">
                        <img src={require("../../Images/EllisWells.png")} alt=""/>
                        <h4>Ellis Wells</h4>
                        <p>
                            I have completed a Post Experience Diploma in Psychology.

                            I have a passion to work with children with additional needs
                            and understand that their environment, interactions and 
                            attachment with others has a big impact on their learning.
                        </p>
                    </div>
                    <div className="staff-images staff2">
                        <img src={require("../../Images/SallyWells.png")} alt=""/>
                        <h4>Sally Wells</h4>
                        <p>
                            I am a Qualified Learning Support Assistant, experienced in SEN Learning Support. 
                            I have the patience to support children in their understanding and scaffold their learning.
                        </p>
                    </div>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
            <a href="https://www.linkedin.com/in/david-c-b491b6106/" rel="noopener noreferrer" target="_blank"><h4 id="trademark">Website made by David Cottrell</h4></a>
        </React.Fragment>
    );
}
 
export default Staff;