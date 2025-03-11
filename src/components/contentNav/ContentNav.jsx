import React, { useState, useEffect } from "react";
import './style.css';

const sections = ["MY STACK", "ABOUT ME", "REFERENCES", "CONTACT"];

const ContentNav = () => {
    const [activeSection, setActiveSection] = useState(sections[0]); // Výchozí první sekce
    const [lastActiveSection, setLastActiveSection] = useState(sections[0]); // Poslední aktivní sekce

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        currentSection = section;
                    }
                }
            });

            // 🛠 Pokud jsme na konci stránky, označíme "CONTACT" jako aktivní sekci
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
                currentSection = "CONTACT";
            }

            if (currentSection) {
                setActiveSection(currentSection);
                setLastActiveSection(currentSection);
            } else {
                setActiveSection(lastActiveSection); // Pokud není žádná sekce aktivní, zůstává poslední aktivní
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastActiveSection]); // Sledujeme poslední aktivní sekci

    // 🛠 Klikací funkce pro navigaci
    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                {sections.map((section) => (
                    <div
                        key={section}
                        className={`section-ref-wrapper ${activeSection === section ? "active" : ""}`}
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