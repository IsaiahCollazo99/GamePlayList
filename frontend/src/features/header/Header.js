import React, { cloneElement, useContext, useState } from 'react';
import NavBar from './NavBar';
import '../../css/header/header.css';
import { AppBar, IconButton, InputBase, makeStyles, Paper, useScrollTrigger } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';

const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '60%',
      marginLeft: '20px',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const style = {
	'backgroundColor': '#24426f',
	'display': 'flex',
	'flexDirection': 'row',
	'justifyContent': 'space-between',
    'height': '10vh',
    'width': '80%',
    'alignItems': 'center',
}

const Header = () => {
    const [ search, setSearch ] = useState("");
    const { currentUser } = useContext(AuthContext);
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const handleSearch = async ( e ) => {
        e.preventDefault()
        if(location.pathname !== "/search") {
            history.push("/search", {search});
        }
    }

    const handleChange = ( e ) => {
        setSearch(e.target.value);
    }

    return (
        <ElevationScroll>
        <AppBar style={style} className="header">
            <Paper component="form" onSubmit={handleSearch} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search A Game Title"
                    inputProps={{ 'aria-label': 'search a game title' }}
                    value={search}
                    onChange={handleChange}
                />
                <IconButton type="submit" aria-label="search" className={classes.iconButton}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            <NavBar width={currentUser ? '25%' : '30%'} />
        </AppBar>
        </ElevationScroll>

    )   
}

export default Header;