import React from 'react';

import Employee from './Employee';

function Staff() {
    return (
        <React.Fragment>
            <h2 style={{textAlign: "center"}}>Our Staff</h2>
            <div className="staff-container">
                <Employee name="Ellis Wells" img={require("../../Images/EllisWells.png")} statement="I have completed a Post Experience Diploma in Psychology. I have a passion to work with children with additional needs and understand that their environment, interactions and attachment with others has a big impact on their learning." />
                <Employee name="Sally Wells" img={require("../../Images/SallyWells.png")} statement="I am a Qualified Learning Support Assistant, experienced in SEN Learning Support. I have the patience to support children in their understanding and scaffold their learning." />
                <Employee name="Amy Wells" img={require("../../Images/AmyWells.jpg")} statement="I have completed a Certificate of Higher Education in Psychology. I have a strong understanding of how to communicate with children, especially those with additional needs and am always looking for exciting and enriching ways to support children in relaxation and play." />
            </div>
            <div className="card">
                <h4>Vacancies</h4>
                <a href="https://raw.githubusercontent.com/EllisCWells/WribbenhallFiles/master/Documents/Ofsted/Published%20Performance%20Table.docx"><h4>Lunch Time Supervisor Advert June 2020</h4></a>
            </div>
            <div style={{clear: "both"}}></div>
            <a href="https://www.linkedin.com/in/david-c-b491b6106/" rel="noopener noreferrer" target="_blank"><h4 id="trademark">Website made by David Cottrell</h4></a>
        </React.Fragment>
    );
}
 
export default Staff;