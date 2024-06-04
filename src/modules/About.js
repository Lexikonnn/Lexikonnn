import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/About.css';
import portrait from '../assets/portrait.png';
import translation from './components/Translation';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const { t } = translation();

    useEffect(() => {
        const element = aboutRef.current;

        gsap.fromTo(element, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);

    return (
        <div className="container-about" ref={aboutRef}>
            <div className='container-row'>
                <div className="wrapper-about-title">
                    <h1 className="main-title blue-line">{t("about.about")}</h1>
                    <h4 className="secound-text">h.skrzeczek@gmail.com</h4>
                </div>
                <div className="wrapper-about-content">
                    <p id="about-padding" className="basic-text">
                        {t("about.article")}
                    </p>
                </div>
            </div>
            <div className='container-row portrait-flex'>
                <div className='container-outline'>
                    <div className='container-portrait'>
                        <img className='portrait' src={portrait} alt='portrait' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
