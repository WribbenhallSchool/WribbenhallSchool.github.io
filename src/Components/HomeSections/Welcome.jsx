import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';

import './home.css'

function Welcome(props) {
    return (
        <div className="welcome-section" >
            
            <div className="particle-container">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 60,
                                "density": {
                                    "enable": true,
                                    "value_area": 500
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.05
                            },
                            "size": {
                                "value": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                />
            </div>
            
            <div className="welcome-content">
                <h1>Wribbenhall School</h1>
                <ScrollAnimation animateIn='fadeInUp' duration={1} delay={100}>
                    <p className="justify animated animatedFadeInUp fadeInUp">
                        We are a Select, home-based Specialist Primary School, supporting 
                        children with Social, Emotional and Mental Health conditions to 
                        access education and therapy through de-escalating school-based anxiety.
                    </p>
                </ScrollAnimation>
            </div>
            
        </div>
    );
}

export default Welcome;
