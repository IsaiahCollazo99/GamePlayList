import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../util/apiCalls/getRequests';
import { add_games, set_next } from './feedPageSlice';

const FeedPage = () => {
    const feedPage = useSelector(state => state.feedPage);
    const dispatch = useDispatch();

    const getGamesCall = async () => {
        try {
            const next = feedPage.next;
            const { results, next: newNext }  = await getGames(next);
            console.log({ results, newNext });
            dispatch(add_games(results));
            dispatch(set_next(newNext));
        } catch ( error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGamesCall()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const gamesDisplay = feedPage.games.map((game, i) => {
        return <p key={game.id}>{i}: {game.name}</p>
    })
    
    return (
        <>
            <button onClick={getGamesCall}>Get New Games</button>
            {gamesDisplay}
        </>
    )
}

export default FeedPage;