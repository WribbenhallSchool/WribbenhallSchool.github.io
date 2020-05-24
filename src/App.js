import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast'; //Toast notifications

import smoothscroll from 'smoothscroll-polyfill'; //Adds smooth scroll support for unsupporting browsers (safari)

// General CSS
import "./App.css";

// For react effects
import "animate.css/animate.min.css"; 

import Section from "./Section";
import Page from "./Page";

// Home Page Sections
import Welcome from "./Pages/Home/Welcome";
import About from "./Pages/Home/About";
import Profile from "./Pages/Home/Profile";
import Details from "./Pages/Home/Details";
import Staff from "./Pages/Home/Staff";

// Contact Page Sections
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/Contact/FAQ";

// Policies Page Sections
import Policies from "./Pages/Policies/Policies";

// Gallery Page Sections
import Gallery from "./Pages/Gallery/Gallery";

// Calendar Page Sections
import Calendar from './Pages/Calendar/Calendar';

//404
import PageNotFound from './404';


class App extends Component {

    constructor() {
        super();
        require('dotenv').config()
        
        smoothscroll.polyfill(); //Initiates smooth scroll functionality
    }

    showAnnouncement = (msg) => {
        notify.show(
            <div className="toast-notification-content">
                {msg}
                <br/><br/>
                <button onClick={notify.hide}>close</button>
            </div>, 
            "warning", 
            -1
        );
    }
    componentDidMount(){
        this.showAnnouncement("COVID-19: Following Government advice we currently remain open. ");
    }

    render() {

        
        const pages = [ 
            { name: "Home", url: "/" },
            { name: "Contact Us", url: "/contact" },
            { name: "Our Policies", url: "/policies" },
            { name: "Gallery", url: "/gallery" },
            { name: "Calendar", url: "/calendar" }
        ];

        return (
            <div className="App">
                <Notifications />
                <BrowserRouter>
                    <Switch>

                        {/* Home page */}
                        <Route exact path={pages[0].url} render = {routerprops => (
                            <Page pageNames={pages} pageName={pages[0].name} showDots={true} large={false} >
                                <Section id="Welcome" Name="Welcome" darkStyle="custom" lightStyle="custom"> {/* Welcome section */}
                                    <Welcome/> {/* Welcome content */}
                                </Section>
                                <Section id="About" Name="About Us" lightStyle="custom"> {/* About section */}
                                    <About/> {/* About content */}
                                </Section>
                                <Section id="Profile" Name="Pupil Profile"> {/* Student profile section */}
                                    <Profile/> {/* Profile content */}
                                </Section>
                                <Section id="Details" Name="Our Details"> {/* Details section */}
                                    <Details/> {/* Details content */}
                                </Section>
                                <Section id="Staff" Name="Our Staff and vacancies" darkStyle="custom"> {/* Staff section */}
                                    <Staff/> {/* Staff content */}
                                </Section>
                            </Page>
                        )} />

                        {/* Contact page */}
                        <Route exact path={pages[1].url} render = {routerprops => (
                            <Page pageNames={pages} pageName={pages[1].name} showDots={true} large={false}>
                                <Section id="Contact" Name="Contact Us" >
                                    <Contact/> {/* Contact section */}
                                </Section>
                                <Section id="FAQ" Name="FAQ">
                                    <FAQ/> {/* FAQ section */}
                                </Section>
                            </Page>
                        )} />

                        {/* Policies page */}
                        <Route exact path={pages[2].url} render = {routerprops => (
                            <Page pageNames={pages} pageName={pages[2].name} showDots={false} large={true}>
                                <Section id="Policies" Name="Our Policies" >
                                    <Policies/> {/* Policies section */}
                                </Section>
                            </Page>
                        )} />

                        {/* Gallery page */}
                        <Route exact path={pages[3].url} render = {routerprops => (
                            <Page pageNames={pages} pageName={pages[3].name} showDots={false} large={true}>
                                <Section id="Gallery" Name="Gallery" darkStyle="default" lightStyle="default">
                                    <Gallery/> {/* Gallery section */}
                                </Section>
                            </Page>
                        )} />

                        {/* Calendar page */}
                        <Route exact path={pages[4].url} render = {routerprops => (
                            <Page pageNames={pages} pageName={pages[4].name} showDots={false} large={true}>
                                <Section id="Calendar" Name="Calendar" darkStyle="default" lightStyle="default">
                                    <Calendar/> {/* Gallery section */}
                                </Section>
                            </Page>
                        )} />

                        <Route component={PageNotFound} /> {/* Go home on 404 */}

                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
