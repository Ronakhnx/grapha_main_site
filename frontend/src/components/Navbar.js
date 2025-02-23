import React, { useState } from 'react';
import '../styles/navbar.css';
import new_logo from '../assets/new_logo11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <a href="/"><img src={new_logo} alt="Logo" /></a>
                    </div>
                    <ul className={`navbar-menu ${isMenuActive ? 'active' : ''}`}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                      
                        <li>
                            <a href="/NewOurWork">Projects <FontAwesomeIcon icon={faBolt} size="1x" color="red" /></a>
                        </li>
                        <li>
                            <a href="/terms_condition">T & C</a>
                        </li>
                        <li>
                            <a href="/how_it_is_work">Our Services</a>
                        </li>
                        <li>
                            <a href="#form">Contact</a>
                        </li>
                    </ul>
                    <div 
                        className={`navbar-toggle ${isMenuActive ? 'active' : ''}`} 
                        onClick={toggleMenu}
                    >
                        <div className="bar" />
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
