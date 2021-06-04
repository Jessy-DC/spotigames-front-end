import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <NavLink to="/">
                        <span>
                            <ion-icon name="home-outline">Home</ion-icon>
                        </span>
                    </NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to="/games">
                        <span>
                            Games
                        </span>
                    </NavLink>
                </div>
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