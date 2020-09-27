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
	'justifyContent': 'space-between',
	'height': '10vh'
}

const Header = () => {
    return (
        <ElevationScroll>
        <AppBar style={style} className="header">
            <section className="headerLeft">
                GPL
            </section>

            <NavBar />
        </AppBar>
        </ElevationScroll>

    )   
}

export default Header;