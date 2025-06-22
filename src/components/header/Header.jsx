import './style.css';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';

const Header = () => {
    return (
        <header className=''>
            <div class="header-wrapper manrope">
                <div className='logo-absolute'><Logo /></div>
                {/*<BurgerMenu />*/}
            </div>
        </header>
    );
}

export default Header;