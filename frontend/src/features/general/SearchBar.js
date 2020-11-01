import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '60%',
      marginLeft: '20px',
      gridRow: '1 / 2',
      gridColumn: '1 / 4',
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

const SearchBar = ({ handleSearch }) => {
    const classes = useStyles();
    const [ search, setSearch ] = useState("");

    const handleSubmit = ( e ) => {
        e.preventDefault();
        handleSearch(search);
    }

    const handleChange = ( e ) => {
        setSearch(e.target.value);
    }
    
    return (
        <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
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
    )
}

export default SearchBar;