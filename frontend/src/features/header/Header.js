import React, { cloneElement, useContext } from 'react';
import NavBar from './NavBar';
import '../../css/header/header.css';
import { AppBar, useScrollTrigger } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';
import SearchBar from '../general/SearchBar';

const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const style = {
	'backgroundColor': '#24426f',
	'display': 'flex',
	'flexDirection': 'row',
  'height': '10vh',
  'width': '80%',
  'alignItems': 'center',
}

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();

    const handleSearch = async ( search ) => {
        if(location.pathname !== "/search") {
            history.push("/search", {search});
        }
    }

    return (
        <ElevationScroll>
        <AppBar 
          style={{...style, justifyContent: location.pathname !== "/search" ? 'space-between' : 'flex-end'} }
          className="header"
        >
          {location.pathname !== "/search" ? <SearchBar handleSearch={handleSearch} /> : null}
          <NavBar width={currentUser ? '25%' : '30%'} />
        </AppBar>
        </ElevationScroll>

    )   
}

export default Header;