import React from 'react';
import '../../css/gameCard/gameCard.css';

const GameCard = ({ game }) => {
    const { name, background_image } = game
    const getDisplayName = () => {
        if(name.length > 28) {
            return <p>{name.slice(0, 28) + "..."}</p>
        } else return <p>{name}</p>
    }
    
    return (
        <article className="gameCard">
            <p>{getDisplayName()}</p>
            <img src={background_image} alt={`${name} cover`} />
        </article>
    )
}

export default GameCard;