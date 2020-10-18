import React, { cloneElement } from 'react';
import NavBar from './NavBar';
import '../../css/header/header.css';
import { AppBar, useScrollTrigger } from '@material-ui/core';

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
	'justifyContent': 'flex-end',
    'height': '10vh',
    'width': '80%',
    'align-items': 'center',
}

const Header = () => {
    return (
        <ElevationScroll>
        <AppBar style={style} className="header">
            <NavBar />
        </AppBar>
        </ElevationScroll>

    )   
}

export default Header;