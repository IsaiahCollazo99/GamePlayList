import React from 'react';

const GameCard = ({ game }) => {
    return (
        <article className="gameCard">
            <p>{game.name}</p>
            <img src={game.background_image} style={{width: '25%'}} alt={`${game.name} cover`} />
        </article>
    )
}

export default GameCard;