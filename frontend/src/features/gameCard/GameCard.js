import React from 'react';
import { PlaylistAddCheckIcon, PlaylistAdd } from '@material-ui/icons';
import '../../css/gameCard/gameCard.css';

const GameCard = ({ game }) => {
    const { name, background_image } = game;
    
    const getDisplayName = () => {
        if(name.length > 22) {
            return name.slice(0, 22) + "...";
        } else return name;
    }
    
    return (
        <article className="gameCard">
            <h3>{getDisplayName()} <PlaylistAdd /></h3>
            <img src={background_image} alt={`${name} cover`} />
        </article>
    )
}

export default GameCard;