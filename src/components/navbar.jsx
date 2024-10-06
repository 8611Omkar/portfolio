import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <div>
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#about" path="./components/About">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;