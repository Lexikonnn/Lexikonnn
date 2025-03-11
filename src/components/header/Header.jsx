import './style.css';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';

const Header = () => {
    return (
        <header className=''>
            <div class="header-wrapper manrope">
                <Logo />
                {/*<BurgerMenu />*/}
            </div>
        </header>
    );
}

export default Header;