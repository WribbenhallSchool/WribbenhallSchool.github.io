import React from 'react';

function FAQ(props){
    const handleClick = (event) => {
        const answerID = "A" + event.currentTarget.id.substr(1);
        const dotID = "D" + event.currentTarget.id.substr(1);
        document.getElementById(answerID).classList.toggle("show");
        document.getElementById(dotID).classList.toggle("hide");
    }
    return(
        <div className="section-content">
            <div className="FrequentQuestions">
                <h2>Frequently Asked Questions</h2>
                <div className="question card" id="Q1" onClick={handleClick}>
                    <h4>Is my child the right age to apply?</h4>
                    <h2 id="D1">...</h2>
                    <p className="read-more-target" id="A1">We currently only accept children between the ages of <b>5 to 11</b> years old.</p>
                </div>
                <div className="question card" id="Q2" onClick={handleClick}>
                    <h4>Does my child need an EHCP?</h4>
                    <h2 id="D2">...</h2>
                    <p className="read-more-target" id="A2"><b>Yes.</b> For us to be able to accept a child's application, they must first have an EHCP.</p>
                </div>
            </div>
        </div>
    );
}


export default FAQ;