import './style.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <h1 className='manrope'>GET IN TOUCH</h1>
                <div className='footer-wrapper inter'>
                    <div>
                        <h3>Call Me</h3>
                        <a href="tel:+420731002086">+420 731 002</a>
                    </div>
                    <div>
                        <h3>Mail Me</h3>
                        <a onClick={() => (window.location.href = "mailto:h.skrzeczek@gmail.com?subject=Interest in establishing cooperation.&body=More details...")}>h.skrzeczek@gmail.com</a>
                    </div>
                    <div>
                        <h3>Visit My</h3>
                        <a href='https://github.com/Lexikonnn' target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>

                </div>
                <p className='credit inter'>Created by Jan Skrzeczek 2025</p>
            </div>
        </footer>
    );
}

export default Footer;