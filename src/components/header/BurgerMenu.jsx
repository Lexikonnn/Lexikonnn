import './style.css';

const BurgerMenu = ({ isOpen }) => {
    return (
        <div className={`burger-wrapper ${isOpen ? 'open' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default BurgerMenu;