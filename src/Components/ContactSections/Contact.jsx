import React, {Component} from "react";
import emailjs from 'emailjs-com'; //Client side email sending
import Notifications, {notify} from 'react-notify-toast'; //Toast notifications
import { withRouter } from "react-router";

import Enquiry from './enquiryForm';
import Apply from './applyForm';

import './contact.css'

const EmailJS_UserID = process.env.REACT_APP_EMAIL_USER_ID;

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentForm: this.props.location.state ? this.props.location.state.form : "enquiry"
        }

        //Get initial form
        if(this.state.currentForm === "application"){
            this.form = <Apply handleSubmit={this.handleSubmit}/>
        }else{
            this.form = <Enquiry handleSubmit={this.handleSubmit}/>
        }
       
        window.addEventListener('online',  this.updateIndicator);
        window.addEventListener('offline', this.updateIndicator);
        this.updateIndicator();

    }

    updateIndicator = (event) => {
        navigator.onLine ? this.isOnline = true : this.isOnline = false;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let validForm = false;
        
        //Validation
        for(let i = 0; i < event.target.length-1; i++){
            if(event.target[i].value !== "" && event.target[i].value !== "default"){
                validForm = true;
            }else{
                validForm = false;
                notify.show("Error, invalid form.", "error", 2500);
                break;
            }
        }

        if(validForm){
            if(this.state.currentForm === "application"){
                let data = {
                    childName: event.target[0].value,
                    DOB: event.target[1].value,
                    Issues: event.target[2].value,
                    school: event.target[3].value,
                    attendance: event.target[4].value,
                    parentsName: event.target[5].value,
                    emailAddress: event.target[6].value,
                    appointmentDate: event.target[7].value,
                    additional: event.target[8].value
                }
                this.sendEmail(data, "Application");
                setTimeout(function(){ 
                    document.getElementById("applicationForm").reset(); 
                    window.scrollTo({top: 0,behavior: "smooth"});
                }, 1000);
            }
            else if (this.state.currentForm === "enquiry"){
                let data = {
                    name: event.target[0].value,
                    emailAddress: event.target[1].value,
                    Subject: event.target[2].value,
                }
                this.sendEmail(data, "Enquiry")
                setTimeout(function(){ 
                    document.getElementById("enquiryForm").reset(); 
                    window.scrollTo({top: 0,behavior: "smooth"});
                }, 1000);
            }
        }        
    }

    sendEmail = (data, templateID) => {
        if(this.isOnline){
            emailjs.send("zoho", templateID, data, EmailJS_UserID)
            .then(function(response) {
                // console.log('SUCCESS!', response.status, response.text);
                notify.show(templateID + " sent!", "success", 2500);
            }, function(error) {
                // console.log('FAILED...', error);
                notify.show("Email failed to send! Please try again later...", "error", 2500);
            });
        }else{
            notify.show("Could not send email as this device is not connected to the internet. Please try again later...", "error", 2500);
        }
    }

    handleClick = (event) => {
        switch (event.target.id) {
            case "application":
                this.form = <Apply handleSubmit={this.handleSubmit} darkmode={this.props.darkmode}/>;
                this.setState({currentForm: "application"});
                document.getElementById("application").classList.add("activeBtn");
                document.getElementById("enquiry").classList.remove("activeBtn");
                break;
            case "enquiry":
                this.form = <Enquiry handleSubmit={this.handleSubmit} darkmode={this.props.darkmode}/>;
                this.setState({currentForm: "enquiry"})
                document.getElementById("enquiry").classList.add("activeBtn");
                document.getElementById("application").classList.remove("activeBtn");
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <React.Fragment>
                <Notifications />
                <h2 style={{textAlign: "center"}}>Select a form:</h2>
                <div className="option-buttons">
                    <button onClick={this.handleClick} className={this.state.currentForm === "enquiry" ? "activeBtn" : ""} id="enquiry" >Enquiry</button> 
                    <button onClick={this.handleClick} className={this.state.currentForm === "application" ? "activeBtn" : ""} id="application" >Application</button> 
                </div>
                <br/>
                {this.form}
            </React.Fragment>
        );
    }
}


export default withRouter(Contact);