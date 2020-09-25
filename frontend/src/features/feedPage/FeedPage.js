import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../util/apiCalls/getRequests';
import { add_games, set_next } from './feedPageSlice';
import BottomScrollListener, { useBottomScrollListener } from 'react-bottom-scroll-listener';

const FeedPage = () => {
    const feedPage = useSelector(state => state.feedPage);
    const dispatch = useDispatch();

    const getGamesCall = async () => {
        console.log("hello");
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

    useBottomScrollListener(getGamesCall);

    useEffect(() => {
        getGamesCall()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const gamesDisplay = feedPage.games.map((game, i) => {
        return <p key={game.id}>{i}: {game.name}</p>
    })
    
    return (
        <main className="feedPageContainer">
            {gamesDisplay}
        </main>
    )
}

export default FeedPage;