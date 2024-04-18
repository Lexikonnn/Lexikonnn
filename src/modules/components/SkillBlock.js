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
                    // Pokud už je animace spuštěna a uživatel opustí zorné pole, necháme skill bary viditelné
                    return;
                }
            });
        }, options);

        if (skillsContainerRef.current) {
            skillsObserver.observe(skillsContainerRef.current);
        }

        return () => {
            if (skillsContainerRef.current) {
                skillsObserver.unobserve(skillsContainerRef.current);
            }
        };
    }, [animationStarted]);

    const animateBlueBar = (bar) => {
        if (bar && bar.dataset) {
            const percent = parseFloat(bar.dataset.percent);
            const duration = 1000; // Doba trvání animace v milisekundách
            let startTime; // Přepíšeme na let, abychom mohli měnit hodnotu

            const animationFrame = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const elapsedTime = currentTime - startTime;
                let width = (elapsedTime / duration) * percent;

                // Ochrana proti překročení 100%
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

                                        <div className="skill-bar  skill1" data-percent="89">
                                            <span className="skill-count1">89%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faCss3Alt} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="87">
                                            <span className="skill-count1">87%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faJs} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="39">
                                            <span className="skill-count1">39%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faReact} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="41">
                                            <span className="skill-count1">41%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-skill">
                                <FontAwesomeIcon icon={faVuejs} bounce size="xl" style={{ color: "#f8f8f8", animationDuration: "2s" }} />
                                <div className='skill-row'>
                                    <div id="code-skill" className="skill">

                                        <div className="skill-bar  skill1" data-percent="34">
                                            <span className="skill-count1">34%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='basic-text'>Figma | Adobe | C | Java | Typescript | Git | Docker | MySQL | PHP</p>
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
                                        <div className="skill-bar  skill1" data-percent="79">
                                            <span className="skill-count1">79%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
     );
}
 
export default SkillBlock;