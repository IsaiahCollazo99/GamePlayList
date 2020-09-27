import React, { useState } from 'react';
import { PlaylistAdd } from '@material-ui/icons';
import '../../css/gameCard/gameCard.css';
import { Menu, MenuItem } from '@material-ui/core';

const GameCard = ({ game }) => {
    const { name, background_image } = game;
    const [ anchor, setAnchor ] = useState(null);
    
    const getDisplayName = () => {
        if(name.length > 26) {
            return name.slice(0, 26) + "...";
        } else return name;
    }

    const openLists = ( e ) => {
        setAnchor(e.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

    const addToList = () => {
        setAnchor(null);
    }
    
    return (
        <article className="gameCard">
            <h3>
                {getDisplayName()} 
                <PlaylistAdd onClick={openLists} aria-controls={`${game.name} menu`} aria-haspopup="true" />
                <Menu 
                    id={`${game.name} menu`}
                    anchorEl={anchor}
                    keepMounted
                    open={Boolean(anchor)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={addToList}>Test</MenuItem>
                </Menu>
            </h3>
            <img src={background_image} alt={`${name} cover`} />
        </article>
    )
}

export default GameCard;