import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from '../../util/firebaseFunctions';

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);

    const getDisplay = () => {
        if(currentUser) {
            return (
                <NavLink exact to="/" onClick={logout}>
                    LOG OUT
                </NavLink>
            )
        } else {
            return (
                <>
                <NavLink to="/login">
                    LOG IN
                </NavLink>
                
                <NavLink to="/signup">
                    SIGN UP
                </NavLink>
                </>
            )
        }
    }
    return (
        <nav>
            <NavLink to="/games">
                GAMES
            </NavLink>

            {getDisplay()}
        </nav>
    )
}

export default NavBar;