import React from 'react';
import '../../css/gameCard/gameCard.css';

const GameCard = ({ game }) => {
    return (
        <article className="gameCard">
            <p>{game.name}</p>
            <img src={game.background_image} alt={`${game.name} cover`} />
        </article>
    )
}

export default GameCard;