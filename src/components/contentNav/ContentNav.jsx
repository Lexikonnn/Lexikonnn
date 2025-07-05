import { useState, useEffect } from "react";
import { scrollToSection } from '../../utils/scrollToSection';
import './style.css';

const sections = ["", "MY STACK", "ABOUT ME", "REFERENCES", "CONTACT"];

const ContentNav = () => {
    const [activeSection, setActiveSection] = useState(sections[0]);
    const [lastActiveSection, setLastActiveSection] = useState(sections[0]);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "HOME";

            if (window.scrollY === 0) {
                currentSection = "HOME";
            } else {
                sections.forEach((section) => {
                    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 120 && rect.bottom >= 120) {
                            currentSection = section;
                        }
                    }
                });

                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
                    currentSection = "CONTACT";
                }
            }

            if (currentSection) {
                setActiveSection(currentSection);
                setLastActiveSection(currentSection);
            } else {
                setActiveSection(lastActiveSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastActiveSection]);


    return (
        <div className='nav-container'>
            <div className='nav-wrapper b-shadow'>
                {sections.map((section) => (
                    <div
                        key={section}
                        className={`section-ref-wrapper ${(activeSection && activeSection === section) ? "active" : ""}`}
                        onClick={() => scrollToSection(section)}
                    >
                        <h3 className='sm-text manrope'>{section}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentNav;