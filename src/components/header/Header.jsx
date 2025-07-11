import './style.css';
import { useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';
import { useActiveSection } from '../../utils/useActiveSection';
import { scrollToSection } from '../../utils/scrollToSection';
import Logo from './Logo';


const navItems = [
    { label: "Home", section: "HOME" },
    { label: "Stack", section: "MY STACK" },
    { label: "About", section: "ABOUT ME" },
    { label: "References", section: "REFERENCES" },
];


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection = useActiveSection();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <header className=''>
            <div class="header-wrapper manrope">
                <div className='logo-absolute'><Logo /></div>
                <div onClick={toggleMenu}>
                    <BurgerMenu isOpen={menuOpen} />
                </div>
            </div>
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <div className='mobile-nav-wrapper'>
                    <ul className='manrope'>
                        {navItems.map(({ label, section }) => (
                            <li
                                key={section}
                                onClick={() => {
                                    scrollToSection(section);
                                    setMenuOpen(false);
                                }}
                                className={activeSection === section ? 'active' : ''}
                            >
                                <a>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mobile-social-container'>
                    <div className='mobile-social-wrapper'>
                        <img src='/assets/phone.svg' />
                        <a href="tel:+420731002086">
                            <h3 className="manrope">+420 731 002 086</h3>
                        </a>
                    </div>
                    <div className='mobile-social-wrapper'>
                        <img src='/assets/email.svg' />
                        <h3 className='manrope' onClick={() => (window.location.href = "mailto:h.skrzeczek@gmail.com?subject=Interest in establishing cooperation.&body=More details...")}>h.skrzeczek@gmail.com</h3>
                    </div>
                    <div className='mobile-social-wrapper'>
                        <img src='/assets/github.svg' />
                        <a href="https://github.com/Lexikonnn"
                            target="_blank"
                            rel="noopener noreferrer">
                            <h3 className='manrope'>Github</h3>
                        </a>
                    </div>
                </div>
                <div className='credits-mobile'>
                    <p className='inter'>JAN SKRZECZEK</p>
                    <p className='inter'>2025</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;