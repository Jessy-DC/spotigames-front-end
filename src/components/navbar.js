import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" alt="logo" />
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <NavLink to="/auth">Authenticate</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;