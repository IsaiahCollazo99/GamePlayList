import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../util/apiCalls/getRequests';
import { add_games, set_next } from './feedPageSlice';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import '../../css/feedPage/feedPage.css';
import GameCard from '../gameCard/GameCard';
import { TextField } from '@material-ui/core';

const FeedPage = () => {
    const [ loading, setLoading ] = useState(false);
    const feedPage = useSelector(state => state.feedPage);
    const { system, genre, tag, publisher, developer } = feedPage.filters;
    const dispatch = useDispatch();

    const getGamesCall = async () => {
        try {
            setLoading(true);
            const next = feedPage.next;
            const { results, next: newNext }  = await getGames(next);
            console.log({ results, newNext });
            dispatch(add_games(results));
            dispatch(set_next(newNext));
            setLoading(false);
        } catch ( error ) {
            setLoading(false);
            console.log(error);
        }
    }

    useBottomScrollListener(getGamesCall);

    useEffect(() => {
        getGamesCall()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = ( e ) => {

    }

    const gamesDisplay = feedPage.games.map(( game ) => {
        return (
            <GameCard game={game} key={game.id} />
        )
    })
    
    return (
        <main className="feedPageContainer">
            <section className="gamesList">
                {gamesDisplay}
                {loading ? <p>Loading...</p> : null}
            </section>
        </main>
    )
}

export default FeedPage;