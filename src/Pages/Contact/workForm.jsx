import React from "react";

function Work(props) {    
    return (
        <div className="work-form">
            <form onSubmit={props.handleSubmit} id="workForm" className={props.darkmode ? "card card-dark" : "card"}>
                <label>Your full name:</label>
                <input type="text" id="fullname" name="fullname" required />
            
                <label>Email:</label>
                <input type="email" id="email" name="email" required />

                <label>CV: </label>
                <input type="file" id="email" name="email" required />

                <br/><br/>
            
                <label>Personal Statement:</label>
                <textarea id="statement" name="statement" required ></textarea>
                <input type="submit" value="Submit" className="submitbtn"/>
            </form>
        </div>
        
    );
  }

  export default Work;