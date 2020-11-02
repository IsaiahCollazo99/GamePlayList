import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import { logout } from '../../util/firebaseFunctions';
import { reset_lists } from '../gameCard/listsSlice';

const NavBar = ({ width }) => {
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(reset_lists());
        logout();
    }

    const getDisplay = () => {
        if(currentUser) {
            return (
                <p className="logout" href="/" onClick={handleLogout}>
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