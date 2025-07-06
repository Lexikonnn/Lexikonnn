// utils/useActiveSection.js
import { useState, useEffect } from "react";

const sections = ["HOME", "MY STACK", "ABOUT ME", "REFERENCES"];

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState("HOME");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

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
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return activeSection;
};