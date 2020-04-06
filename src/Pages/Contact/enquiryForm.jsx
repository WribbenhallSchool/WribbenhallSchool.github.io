import React from "react";

function Enquiry(props) {    
    return (
        <div className="enquiry-form">
            <form onSubmit={props.handleSubmit} id="enquiryForm" className={props.darkmode ? "card card-dark" : "card"}>
                <label>Your full name:</label>
                <input type="text" id="fullname" name="fullname" required />
            
                <label>Email:</label>
                <input type="email" id="email" name="email" required />
            
                <label>Subject:</label>
                <textarea id="subject" name="subject" required ></textarea>
                <input type="submit" value="Submit" className="submitbtn"/>
            </form>
        </div>
        
    );
  }

  export default Enquiry;