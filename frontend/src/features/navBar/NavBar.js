import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from '../../util/firebaseFunctions';

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);

    const getDisplay = () => {
        if(currentUser) {
            return (
                <NavLink to="/" onClick={logout}>
                    Log Out
                </NavLink>
            )
        } else {
            return (
                <>
                <NavLink to="/login">
                    Log In
                </NavLink>
                
                <NavLink to="/signup">
                    Sign Up
                </NavLink>
                </>
            )
        }
    }
    return (
        <nav>
            <NavLink to="/games">
                Games List
            </NavLink>

            {getDisplay()}
        </nav>
    )
}

export default NavBar;