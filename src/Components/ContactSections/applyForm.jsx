import React from "react";

function Apply(props) {
    return (
        <div className="apply-form">
            <form onSubmit={props.handleSubmit} id="applicationForm" className={props.darkmode ? "card card-dark" : "card"}>
                
                <label>Your child's full name:</label>
                <input type="text" id="cName" name="cName" required />
                
                <br/>

                <label>Your child's DOB:</label>
                <br/>
                <input type="date" name="DOB" id="DOB" required/>

                <br/>

                <label>Please include any behaviour/anxiety or medical conditions issues your child may have:</label>
                <textarea
                    id="details"
                    name="subject"
                    rows="4"
                    required
                >
                </textarea>

                <br/>

                <label>Your child's current school:</label>
                <input autoComplete="nope" type="text" id="school" name="school" required/>

                <br/>

                <label>Is their current attendance full time or reduced?</label>
                <br/>
                <select name="attendance" id="cAttendance" required>
                    <option value=""> -- select an option -- </option>
                    <option value="fulltime">full time</option>
                    <option value="reduced">reduced</option>
                </select>

                <br/>

                <label>Your full name:</label>
                <input autoComplete="nope" type="text" id="pName" name="pName" required/>

                <br/>

                <label>Your email address:</label>
                <input type="text" id="email" name="email" required/>


                <br/>

                <label>Please select a prefered appoinment date or leave empty to discuss this at a later date:</label>
                <input type="date" name="appointment" id="adate" />

                <br/>
                
                <label>Additional notes or questions:</label>
                <textarea
                    id="additional"
                    name="subject"
                    rows="4"
                    required
                >
                </textarea>
                
                <br/>

                <input type="submit" value="Submit" className="submitbtn"/>
            </form>
        </div>
    );
  }

  export default Apply;