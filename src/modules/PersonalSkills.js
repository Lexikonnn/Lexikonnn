import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/PersonalSkills.css';
import translation from './components/Translation';

gsap.registerPlugin(ScrollTrigger);

const PersonalSkills = () => {
    const { t } = translation();
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = containerRef.current.querySelectorAll('.wrapperPersonalSkills');

        elements.forEach((element, index) => {
            gsap.fromTo(element, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    scrub: true
                }
            });
        });
    }, []);

    return (
        <div className="containerPersonalSkills" ref={containerRef}>


            <div className='sub-container'>
            <div className="wrapperPersonalSkills left">
                <h6 className="side-title">{t("personal.first")}</h6>
            </div>
            <div className="wrapperPersonalSkills right">
                <h6 className="side-title">{t("personal.secound")}</h6>
            </div>
            <div className="wrapperPersonalSkills left">
                <h6 className="side-title">{t("personal.third")}</h6>
            </div>
            <div className="wrapperPersonalSkills right">
                <h6 className="side-title">{t("personal.fourth")}</h6>
            </div>
            </div>
        </div>
    );
};

export default PersonalSkills;
