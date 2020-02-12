import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="myNavBar">
        <ul>
            <li>
                <Link to="/">Fretboard</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;