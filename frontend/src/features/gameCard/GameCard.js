import React from 'react';
import '../../css/gameCard/gameCard.css';

const GameCard = ({ game }) => {
    const { name, background_image } = game;
    
    const getDisplayName = () => {
        if(name.length > 26) {
            return <p>{name.slice(0, 26) + "..."}</p>
        } else return <p>{name}</p>
    }
    
    return (
        <article className="gameCard">
            <h3>{getDisplayName()}</h3>
            <img src={background_image} alt={`${name} cover`} />
        </article>
    )
}

export default GameCard;