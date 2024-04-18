import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Resume.css';
import XpComponent from './components/XpComponent';
import ResumeBlock from './components/ResumeBlock';
import Hobbies from './components/Hobbies';
import SkillBlock from './components/SkillBlock';
import translation from './components/Translation';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    const { t } = translation();
    const mainResumeRef = useRef(null);

    useEffect(() => {
        const element = mainResumeRef.current;

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
                end: 'bottom 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, []);

    return (
        <div className='main-resume center' ref={mainResumeRef}>
            <h1 className="main-title blue-line">{t("resume.abilities")}</h1>
            <div className='container-resume left'>
                <div className='wrapper-resume'>
                    <div className='container-col'>
                        <SkillBlock />
                    </div>
                    <div className='container-col-small-res'>
                        <div className='container-col'>
                            <h4 className="small-title">{t("resume.experience")}</h4>
                            <div className='wrapper-col'>
                                <a className='invisible-link' href='https://www.boliga.cz/'><XpComponent year={2023} role="Front-end Developer" project="Sport club Metalurg | boliga.cz" /></a>
                                <hr className='verti-line' />
                                <XpComponent year={2024} role="Front-end Developer" project="9-TD Elite | Happy Boost" />
                            </div>
                            <ResumeBlock title={t("resume.education")} content={t("resume.school")} />
                        </div>
                        <div className='container-col'>
                            <ResumeBlock title={t("resume.do")} content="Front-end Developer | HTML Coder | UX/UI Designer" />
                            <Hobbies />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
