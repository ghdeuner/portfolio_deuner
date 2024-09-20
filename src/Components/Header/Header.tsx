import { useState } from 'react';
import logo from "../../assets/img/logo.png";
import "./Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo-container">
                    <img src={logo} alt="logo que se assemelha com a letra G" className="header__logo" />
                </div>
                <button className="header__menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`header__menu-icon ${isMenuOpen ? 'header__menu-icon--open' : ''}`}></span>
                </button>
                <ul className={`header__list ${isMenuOpen ? 'header__list--open' : ''}`}>
                    <li className="header__list-item"><a href="#home" className="header__link" onClick={toggleMenu}>Home</a></li>
                    <li className="header__list-item"><a href="#about" className="header__link" onClick={toggleMenu}>About Me</a></li>
                    <li className="header__list-item"><a href="#skills" className="header__link" onClick={toggleMenu}>Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}