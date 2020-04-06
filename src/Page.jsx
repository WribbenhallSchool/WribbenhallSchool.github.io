import React, {Component} from "react";

import {withRouter} from 'react-router-dom';

// Navigation
import Dots from "./Components/Dots";
import Nav from "./Components/Nav";
import Moon from "./Components/DarkMode";

class Main extends Component {

    constructor(props){
        super(props);

        window.addEventListener('resize', this.handleResize);

        setTimeout(()=>{
            window.addEventListener('scroll', this.handleScroll);
        }, 100);

        this.currentSectionIndex = 0;
        this.sectionIDs = [];
        this.sectionNames = [];

        this.setup();

        const time = new Date().getHours();
        let darkmode_temp;

        // Between 9pm and 6am
        if( (time >= 21 && time <= 23) || (time >= 0 && time <= 6) ){
            darkmode_temp = true;
        }else{
            darkmode_temp = false;
        }

        this.state = { 
            dots: this.dots, 
            currentSectionName: this.sectionNames[0],
            currentPageName: this.props.pageName,
            darkmode: darkmode_temp
        };
    }

    // Get section Names and IDs passed to the current page
    setup = () => {
        this.sectionIDs = [];
        this.sectionNames = [];

        //Children prop is array if there are multiple sections
        if(Array.isArray(this.props.children)){
            //Get all section IDs and Names
            for(let i = 0; i < this.props.children.length; i++) {
                this.sectionIDs.push(this.props.children[i].props.id);
                this.sectionNames.push(this.props.children[i].props.Name);
            }
        }else{
            // Get the ID and Name for the section (if there is only one)
            this.sectionIDs = [this.props.children.props.id];
            this.sectionNames = [this.props.children.props.Name];
        }
        this.temp_currentPageName = this.props.pageName;
        this.dots = this.createDots();
    }

    // Called when page is changed
    componentDidUpdate(previousProps, previousState) {
        // Only update state once
        if (this.state.dots === previousState.dots) {
            this.setup();
            this.getSectionPositions();
            const currentSectionName = this.sectionNames[this.currentSectionIndex];
            
            //Only update state if page has changed
            if(this.temp_currentPageName !== this.state.currentPageName){
                window.scrollTo({ top: 0 }); //Scroll to top of page changed
                this.setState({
                    dots: this.dots,
                    currentSectionName: currentSectionName,
                    currentPageName: this.temp_currentPageName
                });
            }
        }
    }

    //Only gets called once when the initial page gets loaded
    componentDidMount() {
        this.getSectionPositions();
        setTimeout(()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 250);
    }
    
    handleResize = () => {
        this.getSectionPositions();

        if(window.innerWidth/window.innerHeight === 3){
            // console.log("dim")
        }

        //Only do shit for home page
        if(this.state.currentPageName === "Home"){

            let WelcomeElement = document.getElementById("Welcome");

            //Mobile landscape
            if(window.innerHeight <= 400){
                WelcomeElement.classList = "section";
                WelcomeElement.classList.add( this.state.darkmode ? "Welcome-dark" : "Welcome-light" )
            } //Mobile
            else if(window.innerWidth <= 400){
                WelcomeElement.classList = "section";
                WelcomeElement.classList.add( this.state.darkmode ? "Welcome-dark-mobile" : "Welcome-light-mobile" )
            }else{
                WelcomeElement.classList = "section";
                WelcomeElement.classList.add( this.state.darkmode ? "Welcome-dark" : "Welcome-light" )
            }
        }
    }

    // Create array of unqiue dot items
    createDots = () => {
        let dots = [];
        this.sectionIDs.forEach((id, count) => {
            dots.push(
                {id: 'dot-' + parseInt(count+1), active: count === 0 ? true : false}
            );
        });
        return dots;
    }

    handleScroll = () => {
        const offset = 250;
        for(let i = 0; i < this.sectionTops.length; i++){
            if(window.scrollY >= this.sectionTops[i] - offset && window.scrollY <= this.sectionBottoms[i] - offset){
                let dots = [...this.state.dots]; // copy of dots from state
                this.currentPageNum = i;
                //Only update state if section has changed
                if(i !== this.currentSectionIndex){
                    this.currentSectionIndex = i;
                    let currentSectionName = this.sectionNames[this.currentSectionIndex];
                    dots.forEach((dot, i) => {
                        i === this.currentPageNum ? dot.active = true : dot.active = false;
                    })
                    this.setState({ 
                        dots: dots, 
                        currentSectionName: currentSectionName 
                    });
                }
                break;
            }
        }
    }

    getSectionPositions = () => {
        this.sectionTops = [];
        this.sectionIDs.forEach(secID => { this.sectionTops.push(document.getElementById(secID).getBoundingClientRect().top + window.scrollY ); })
        this.sectionBottoms = [];
        this.sectionIDs.forEach(secID => { this.sectionBottoms.push( document.getElementById(secID).getBoundingClientRect().bottom + window.scrollY - 3); })
    }

    scrollPage = (pageID) => {
        let dots = [...this.state.dots]; // copy of dots from state
        this.SectionIndex = this.sectionIDs.indexOf(pageID); // Get the current index of the current page

        dots.forEach((dot, i) => {
            i === this.SectionIndex ? dot.active = true : dot.active = false;
        })
    
        this.setState({ dots: dots });

        //Make sure nav overlay styles are removed
        const elem = document.getElementsByClassName("hamburger-container");
        elem[0].classList.remove("active");
        document.getElementById("overlay").classList.remove("showOverlay");

        //Scroll the page
        window.scrollTo({
            top: this.sectionTops[this.SectionIndex],
            behavior: "smooth"
        });
    }

    handleMoonClick = () => {
        if(this.state.darkmode === true){
            this.setState({darkmode: false});
        }else{
            this.setState({darkmode: true});
        }
    }

    render() {
        
        const { children, large } = this.props;

        const sections = React.Children.map(children, child =>
            React.cloneElement(child, {
                    large: large, 
                    darkmode: this.state.darkmode,
                    scrollPage: this.scrollPage
                }
            )
        );

        return (
            <React.Fragment>
                <Nav
                    sectionNames = {this.sectionNames} //For displayed menu 
                    pageNames = {this.props.pageNames} //For displayed menu 
                    sectionIDs = {this.sectionIDs} //To scroll correctly
                    scrollPage = {this.scrollPage} //To scroll to section
                    currentPageName = {this.props.pageName} //Show current page in menu
                    currentSectionName = {this.state.currentSectionName} //Show current section in menu
                    darkmode = {this.state.darkmode} //To allow darkmode style change
                />
                <Moon 
                    handleClick = {this.handleMoonClick}
                    darkmode = {this.state.darkmode}
                    currentPageName = {this.props.pageName}
                />
                <Dots
                    dots = {this.state.dots} //Information for to render dots

                    scrollPage = {this.scrollPage} //To scroll to section
                    sectionIDs = {this.sectionIDs} //To scroll to the correct section
                    sectionNames = {this.sectionNames} //For tooltips
                    showDots = {this.props.showDots} //Hides dots if page doesnt need them
                    darkmode={this.state.darkmode} //To allow darkmode style change
                />
                <div className="page">
                    { sections }
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Main);