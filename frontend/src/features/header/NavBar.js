import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from '../../util/firebaseFunctions';

const NavBar = ({ width }) => {
    const { currentUser } = useContext(AuthContext);

    const getDisplay = () => {
        if(currentUser) {
            return (
                <p className="logout" href="/" onClick={logout}>
                    LOG OUT
                </p>
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
        <nav style={{width: width}}>
            <NavLink exact to="/">
                GAMES
            </NavLink>

            {getDisplay()}
        </nav>
    )
}

export default NavBar;