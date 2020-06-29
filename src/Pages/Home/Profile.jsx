import React from "react";

function Profile() {
    return (
        <React.Fragment>
            <h2>Pupil Profile</h2>
            <p className="justify">
                We provide Specialist Education for SEMH children aged 5-11 years, who are too anxious to attend schools and other establishments. 
                Our Key Pupil Profile states the main issues that we are able to/not able to provide for.
            </p>

            <div className="card">
                <h3>Target Profile:-</h3>
                <ul>
                    <li>Anxiety</li>
                    <li>Social phobia (including school phobia)</li>
                </ul>
                <h4>This may include any number of these issues:-</h4>
                <ul className="doubleColumnList" id="acceptedIssues">
                    <li>Selective Mutism</li>
                    <li>Panic disorder</li>
                    <li>Acrophobia</li>
                    <li>Separation anxiety (including school refusal)</li>
                    <li>Attachment Disorder</li>
                    <li>Autism</li>
                    <li>Depression</li>
                    <li>Self-harming</li>
                    <li>Suicidal thoughts and behaviour</li>
                    <li>Other, co-occurring conditions may also be present in our target children.</li>
                </ul>

                <h4>Specifically Excluded Profiles include but are not limited to:-</h4>
                <ul className="doubleColumnList">
                    <li>Moderate, 	Severe, and Profound and Multiple Learning Difficulties </li>
                    <li>Pathological Demand Avoidance</li>
                    <li>Oppositional Defiance Disorder</li>
                    <li>Conduct Disorder</li>
                </ul>
            </div>

            <p className="justify">
                Each child’s application will be considered, by the proprietor, 
                on an individual basis, taking into consideration the attributes 
                of the current pupils. 
            </p>

            <p className="justify">    
                No previous outcomes can be considered a precedent or guide to 
                future decisions made by the proprietor. 
            </p>

            <p className="justify">
                This decision will be based on information received from the 
                pupil’s current placement, information on their EHCP, information 
                from professionals who have assessed the pupil and an interview 
                with the child and their parent(s)/family.
            </p>
        </React.Fragment>
    ); 
}
  export default Profile;