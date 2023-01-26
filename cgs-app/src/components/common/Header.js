import '../../App.css';
import NavState from './menu/context/navState';
import MainMenu from './menu/MainMenu';

const Header = () => {
    return (
        <header className='container'>
            <NavState>
                <MainMenu />
            </NavState>
        </header>
    );
}

export default Header;