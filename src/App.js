import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast'; //Toast notifications

import smoothscroll from 'smoothscroll-polyfill'; //Adds smooth scroll support for unsupporting browsers (safari)

// General CSS
import "./App.css";

// For react effects
import "animate.css/animate.min.css"; 

import Section from "./Components/Section";
import Page from "./Components/Page";

// Home Page Sections
import Welcome from "./Components/HomeSections/Welcome";
import About from "./Components/HomeSections/About";
import Profile from "./Components/HomeSections/Profile";
import Details from "./Components/HomeSections/Details";
import Staff from "./Components/HomeSections/Staff";

// Contact Page Sections
import Contact from "./Components/ContactSections/Contact";
import FAQ from "./Components/ContactSections/FAQ";

// Policies Page Sections
import Policies from "./Components/PoliciesSections/Policies";

// Gallery Page Sections
import Gallery from "./Components/GallerySections/Gallery";

// Calendar Page Sections
import Calendar from './Components/CalendarSections/Calendar';

import PageNotFound from './404';


class App extends Component {

    constructor() {
        super();
        require('dotenv').config()
        
        smoothscroll.polyfill(); //Initiates smooth scroll functionality

    }

    showAnnouncement = (msg) => {
        notify.show(
            msg, 
            "warning", 
            15000
        );
    }

    componentDidMount(){
        // this.showAnnouncement("Unfortunately due to the current situation regarding COVID-19 we have decided to close. We aim to re-open as soon as the situation resolves. Thank you.");
    }

    render() {
        // [["Page name", "URL"]]
        const pageNames = [
            ["Home", "/"], 
            ["Contact Us", "/contact"], 
            ["Our Policies", "/policies"],
            ["Gallery", "/gallery"],
            ["Calendar", "/calendar"]
        ];

        return (
            <div className="App">
                <Notifications />
                <BrowserRouter>
                    <Switch>

                        {/* Home page */}
                        <Route exact path={pageNames[0][1]} render = {routerprops => (
                            <Page pageNames={pageNames} pageName={pageNames[0][0]} showDots={true} large={false} >
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
                                <Section id="Staff" Name="Our Staff" darkStyle="custom"> {/* Staff section */}
                                    <Staff/> {/* Staff content */}
                                </Section>
                            </Page>
                        )} />

                        {/* Contact page */}
                        <Route exact path={pageNames[1][1]} render = {routerprops => (
                            <Page pageNames={pageNames} pageName={pageNames[1][0]} showDots={true} large={false}>
                                <Section id="Contact" Name="Contact Us" >
                                    <Contact/> {/* Contact section */}
                                </Section>
                                <Section id="FAQ" Name="FAQ">
                                    <FAQ/> {/* FAQ section */}
                                </Section>
                            </Page>
                        )} />

                        {/* Policies page */}
                        <Route exact path={pageNames[2][1]} render = {routerprops => (
                            <Page pageNames={pageNames} pageName={pageNames[2][0]} showDots={false} large={true}>
                                <Section id="Policies" Name="Our Policies" >
                                    <Policies/> {/* Policies section */}
                                </Section>
                            </Page>
                        )} />

                        {/* Gallery page */}
                        <Route exact path={pageNames[3][1]} render = {routerprops => (
                            <Page pageNames={pageNames} pageName={pageNames[3][0]} showDots={false} large={true}>
                                <Section id="Gallery" Name="Gallery" darkStyle="default" lightStyle="default">
                                    <Gallery/> {/* Gallery section */}
                                </Section>
                            </Page>
                        )} />

                        {/* Calendar page */}
                        <Route exact path={pageNames[4][1]} render = {routerprops => (
                            <Page pageNames={pageNames} pageName={pageNames[4][0]} showDots={false} large={true}>
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
