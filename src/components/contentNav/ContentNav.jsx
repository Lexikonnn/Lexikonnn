import { scrollToSection } from '../../utils/scrollToSection';
import { useActiveSection } from '../../utils/useActiveSection';
import './style.css';

const sections = ["HOME", "MY STACK", "ABOUT ME", "REFERENCES"];

const ContentNav = () => {
    const activeSection = useActiveSection();

    return (
        <div className='nav-container'>
            <div className='nav-wrapper b-shadow'>
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