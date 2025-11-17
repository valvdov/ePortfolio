import { Link } from 'react-router-dom';
import './Navigation.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
                <h2 className="nav-title">Valerii Vdovin E-Portfolio</h2>

                {/* Кнопка-бургер */}
                <button
                    className="burger-button"
                    onClick={handleToggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <Icon icon="mdi:menu" width="30px" />
                </button>

                {/* Меню */}
                <ul className={`header_menu nav-menu ${menuOpen ? 'menu-open' : ''}`}>
                    <li>
                        <Link to="/" className="header_menu_link" onClick={handleCloseMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/task1" className="header_menu_link" onClick={handleCloseMenu}>
                            Task 1
                        </Link>
                    </li>
                    <li>
                        <Link to="/task2" className="header_menu_link" onClick={handleCloseMenu}>
                            Task 2
                        </Link>
                    </li>
                    <li>
                        <Link to="/task3" className="header_menu_link" onClick={handleCloseMenu}>
                            Task 3
                        </Link>
                    </li>
                    <li>
                        <Link to="/task4" className="header_menu_link" onClick={handleCloseMenu}>
                            Task 4
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;