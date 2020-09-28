import React, { useState } from 'react';
import { PlaylistAdd } from '@material-ui/icons';
import '../../css/gameCard/gameCard.css';
import { Menu, MenuItem } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { addGameToList } from '../../util/apiCalls/postRequests';
import { getGameFromList } from '../../util/apiCalls/getRequests';

const GameCard = ({ game }) => {
    const lists = useSelector(state => state.lists);
    const { name, background_image } = game;
    const [ anchor, setAnchor ] = useState(null);
    
    const getDisplayName = () => {
        if(name.length > 26) {
            return name.slice(0, 26) + "...";
        } else return name;
    }

    const openLists = async ( e ) => {
        setAnchor(e.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

    const addToList = async ( e ) => {
        setAnchor(null);
        const list_id = e.target.value;
        const game_id = game.id;
        await addGameToList(list_id, game_id);
    }

    const isGameInList = ( list ) => {
        const { games: listGames } = list;
        console.log(list);
        if(listGames) {
            for(let i = 0; i < listGames.length; i++) {
                const listGame = listGames[i];
                console.log(listGame);
                if(listGame.game_id === game.id) return true;
            }
        }
        return false;   
    }

    const listsDisplay = lists.map((list, i) => {
        const disabled = isGameInList(list);
        return (
            <MenuItem 
                key={i} 
                value={list.id} 
                onClick={addToList}
                disabled={disabled}
            >{list.list_name}</MenuItem> 
        )
    })
    
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
                    {listsDisplay}
                </Menu>
            </h3>
            <img src={background_image} alt={`${name} cover`} />
        </article>
    )
}

export default GameCard;