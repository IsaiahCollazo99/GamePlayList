import React, { useState } from 'react';
import { PlaylistAdd, Close, Check, Add } from '@material-ui/icons';
import '../../css/gameCard/gameCard.css';
import { ListItemIcon, ListItemText, makeStyles, Menu, MenuItem, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addGameToList } from '../../util/apiCalls/postRequests';
import { update_list } from './listsSlice';
import { removeGameFromList } from '../../util/apiCalls/deleteRequests';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#4cd4a2',
        height: '300px',
        width: '350px',
        color: 'black',
        margin: '20px 0px',
        borderRadius: '1em',
    },

    image: {
        width: '350px',
        height: '250px',
        objectFit: 'cover',
        objectPosition: 'center',
        borderBottomLeftRadius: '1em',
        borderBottomRightRadius: '1em',
    },

    heading: {
        display: 'grid',
        gridTemplateColumns: '90% 10%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        padding: '0 5px',
    }
}));

const GameCard = ({ game }) => {
    const lists = useSelector(state => state.lists);
    const { name, background_image } = game;
    const [ anchor, setAnchor ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
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
        let targetElement = e.target;
        while(targetElement.nodeName !== "LI") {
            targetElement = targetElement.parentNode;
        }
        const list_id = targetElement.value;
        const game_id = game.id;
        const list = await addGameToList(list_id, game_id);
        dispatch(update_list(list));
    }

    const removeFromList = async ( e ) => {
        try {
            let targetElement = e.target;
            while(targetElement.nodeName !== "LI") {
                targetElement = targetElement.parentNode;
            }
            const list_id = targetElement.value;
            const game_id = game.id;
            const list = await removeGameFromList(list_id, game_id);
            dispatch(update_list(list));
        } catch ( error ) {
            console.log(error);
        }
    }

    const isGameInList = ( list ) => {
        const { games: listGames } = list;
        for(let i = 0; i < listGames.length; i++) {
            const listGame = listGames[i];
            if(Number(listGame.list_game) === game.id) return true;
        }
        return false;   
    }

    const listsDisplay = lists.map((list, i) => {
        const gameExistsInList = isGameInList(list);
        return (
            <MenuItem 
                key={i} 
                value={list.id} 
                onClick={gameExistsInList ? removeFromList : addToList}
                className={gameExistsInList ? "added" : "notAdded"}
            >
                <ListItemIcon 
                    className="gameListIcon"
                >
                    <Add fontSize="small" className="addToList" style={{
                        display: gameExistsInList ? 'none' : 'inline'
                    }} />
                    <Close fontSize="small" className="removeFromList" />
                    <Check fontSize="small" className="addedToList" />
                </ListItemIcon>
                <ListItemText primary={list.list_name} />
            </MenuItem> 
        )
    })
    
    return (
        <Paper component="article" className={classes.root + " gameCard"} elevation={3}>
            <h3 className={classes.heading}>
                {getDisplayName()} 
                <PlaylistAdd 
                    onClick={openLists} 
                    aria-controls={`${game.name} menu`} 
                    aria-haspopup="true" 
                    className="gameCardPlaylist"
                />
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
            <img src={background_image} alt={`${name} cover`} className={classes.image} />
        </Paper>
    )
}

export default GameCard;