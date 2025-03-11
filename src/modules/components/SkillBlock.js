import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import translation from '../components/Translation';

const SkillBlock = () => {

    const skillsContainerRef = useRef(null);
    const [animationStarted, setAnimationStarted] = useState(false);
    const { t } = translation();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationStarted) {
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach((bar) => {
                        animateBlueBar(bar);
                    });
                    setAnimationStarted(true);
                } else if (!entry.isIntersecting && animationStarted) {
                    
                    return;
                }
            });
        }, options);

        const currentRef = skillsContainerRef.current;

        if (currentRef) {
            skillsObserver.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                skillsObserver.unobserve(currentRef);
            }
        };
    }, [animationStarted]);


    

    const animateBlueBar = (bar) => {
        if (bar && bar.dataset) {
            const percent = parseFloat(bar.dataset.percent);
            const duration = 1000;
            let startTime;

            const animationFrame = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const elapsedTime = currentTime - startTime;
                let width = (elapsedTime / duration) * percent;

                
                width = Math.min(width, 100);

                bar.style.width = width + '%';
                bar.querySelector('.skill-count1').innerText = Math.floor(width) + '%';

                if (elapsedTime < duration) {
                    requestAnimationFrame(animationFrame);
                }
            };
            requestAnimationFrame(animationFrame);
        }
    };


    return ( 
        <div ref={skillsContainerRef}>
            <h4 className="small-title">{t("resume.skills")}</h4>
                        <div className='wrapper-col'>
                            <div className="wrapper-skill" >
                                <FontAwesomeIcon icon={faHtml5} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="95">
                                            <span className="skill-count1">95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faCss3Alt} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="90">
                                            <span className="skill-count1">90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faJs} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="45">
                                            <span className="skill-count1">45%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faReact} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="58">
                                            <span className="skill-count1">58%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faVuejs} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="23">
                                            <span className="skill-count1">23%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='basic-text'>Figma | Adobe | C | Typescript | Git | Docker | MySQL | PHP | Node.js | Next.js | Tailwind</p>
                        </div>
                        <h4 className="small-title">{t("resume.languages")}</h4>
                        <div className='wrapper-col'>
                            <div className="wrapper-skill">
                                <div className='skill-row'>
                                    <div className="skill">
                                        <p>{t("resume.czech")}</p>
                                        <div className="skill-bar  skill1" data-percent="100">
                                            <span className="skill-count1">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <div className='skill-row'>
                                    <div className="skill">
                                        <p>{t("resume.english")}</p>
                                        <div className="skill-bar  skill1" data-percent="80">
                                            <span className="skill-count1">80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
     );
}
 
export default SkillBlock;