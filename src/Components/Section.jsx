import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';


/**
 * Sub-component of the page component.
 * Each page has at least one section.
 * Required props: 
 * ```html
 * <Section id="" Name="" >
 * ```
 */
function Section(props) {

    const { id, children, large, darkmode, lightStyle, darkStyle } = props;

    // Adds darkmode prop to each section content
    const content = React.Children.map(children, child => {
        if(React.isValidElement(child)){
            return React.cloneElement(child, { darkmode: darkmode })
        }
    });

    let style;

    //apply dark/light mode styles
    if(darkmode) darkStyle === "custom" ? style = id + "-dark" : style = "Default-dark"; 
    else lightStyle === "custom" ? style = id + "-light" : style = "Default-light"; 

    //Special case for the welcome section
    if(id === "Welcome" && window.innerWidth <= 565) style = darkmode ? "Welcome-dark-mobile" : "Welcome-light-mobile";
    
    return (
        <div className={"section " + style} id={id} >
            <div className={large ? "section-content section-large" : "section-content"}>
                <ScrollAnimation animateIn='fadeIn' duration={1.5}  >
                    {content}
                </ScrollAnimation>
            </div>
        </div>
    );
}

 
export default Section;


