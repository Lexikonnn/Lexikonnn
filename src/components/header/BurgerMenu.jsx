import './style.css';
import { useState } from 'react';

const BurgerMenu = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);


    const handleBurgerClick = () => {
            setBurgerOpen(!burgerOpen);
            console.log('state:',burgerOpen);
    };

    return (
        <div className={`burger-wrapper ${burgerOpen ? 'open' : ''}`} onClick={handleBurgerClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default BurgerMenu;