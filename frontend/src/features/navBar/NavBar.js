import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/signup">
                Sign Up
            </NavLink>

            <NavLink to="/games">
                Games List
            </NavLink>
        </nav>
    )
}

export default NavBar;