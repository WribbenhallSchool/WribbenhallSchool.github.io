import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './home.css'

function Welcome(props) {

    const scroll = () => {
        props.scrollPage("About");
    }

    return (
        <div className="welcome-section" >
            <div className="welcome-content">
                <h1>Wribbenhall School</h1>
                <ScrollAnimation animateIn='fadeInUp' duration={1} delay={100}>
                    <p className="animated animatedFadeInUp fadeInUp">
                        We are a Select, home-based Specialist Primary School, supporting 
                        children with Social, Emotional and Mental Health conditions to 
                        access education and therapy through de-escalating school-based anxiety.
                    </p>
            
                </ScrollAnimation>
            </div>

            <div className="scroll-indicator" onClick={scroll}></div>
            
        </div>
    );
}

export default Welcome;
