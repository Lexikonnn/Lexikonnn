import { useEffect, useState } from 'react';
import Button from './components/Button';
import './styles/Home.css';

const Home = ({ scrollToResume, scrollToContact }) => {
    const [visibleChars, setVisibleChars] = useState(0);
    const charArray = "Jan Skrzeczek Front-end Developer".split('');

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleChars(prevChars => prevChars + 1);
        }, 66);

        if (visibleChars === charArray.length) clearInterval(interval);

        return () => clearInterval(interval);
    }, [visibleChars]);

    return (
        <div className="title-container">
            <div className="title-wrapper">
                <h2 className="side-title">
                    {visibleChars > 2 && "Jan".split('').slice(0, visibleChars - 2).join('')}
                </h2>
                <h1 className="main-title">
                    {visibleChars > 5 && "Skrzeczek".split('').slice(0, visibleChars - 5).join('')}
                </h1>
                <h4 className="regular-title">
                    {visibleChars > 14 && "Front-end Developer".split('').slice(0, visibleChars - 14).join('')}
                </h4>
            </div>
            {visibleChars === charArray.length && (
                <div className="btn-wrapper">
                    <a onClick={scrollToResume}><Button text="Resume" /></a>
                    <a onClick={scrollToContact}><Button text="Contact" /></a>
                </div>
            )}
        </div>
    );
};

export default Home;
