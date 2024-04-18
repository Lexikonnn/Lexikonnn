import './styles/Header.css'
import '../styles/Text.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import UkFlag from '../assets/Uk-flag.svg'
import CzFlag from '../assets/czech-flag.svg'
import translation from './components/Translation';

const Header = ({ scrollToAbout, scrollToResume, scrollToHome }) => {

    const { t, changeLanguage } = translation();

    useEffect(() => {
        const closeMenu = (event) => {
            const menuToggle = document.getElementById('menuToggle');
            if (menuToggle && !menuToggle.contains(event.target)) {
                const inputCheckbox = document.querySelector('#menuToggle input[type="checkbox"]');
                if (inputCheckbox && inputCheckbox.checked) {
                    inputCheckbox.checked = false;
                }
            }
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);


    return (
        <div className="header-container">
            <nav role='navigation'>
                <div id='menuToggle'>
                    <input type='checkbox' />
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <ul id='menu'>
                        <a className='link-wrapper'><li className="link" onClick={scrollToHome}>{t("header.home")}</li></a>
                        <a className='link-wrapper'><li className="link" onClick={scrollToAbout}>{t("header.about")}</li></a>
                        <a className='link-wrapper'><li className="link" onClick={scrollToResume}>{t("header.resume")}</li></a>
                        <div className='flag-container-mobile'>
                            <img onClick={() => changeLanguage("cz")} className='flag' src={CzFlag} alt='CzFlag' />
                            <img onClick={() => changeLanguage("en")} className='flag' src={UkFlag} alt='UkFlag' />
                        </div>
                        <div className='mobile-container'>
                            <FontAwesomeIcon icon={faMobileScreenButton} style={{ color: "#f8f8f8" }} />
                            <a className="mobile"><span className='preset'>+420 </span> 731 002 086</a>
                        </div>
                    </ul>
                </div>
            </nav>
            <div className='header-end'>

                <div className='flag-container'>
                    <img onClick={() => changeLanguage("cz")} className='flag' src={CzFlag} alt='CzFlag' />
                    <img onClick={() => changeLanguage("en")} className='flag' src={UkFlag} alt='UkFlag' />
                </div>
                <div className="contact-wrapper">

                    <FontAwesomeIcon icon={faMobileScreenButton} style={{ color: "#f8f8f8" }} />
                    <a className="contact"><span className='preset'>+420 </span> 731 002 086</a>
                </div>
            </div>

            <div className="custom-shape-divider-bottom-1712579962">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default Header;