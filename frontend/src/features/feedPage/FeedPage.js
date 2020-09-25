import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../util/apiCalls/getRequests';
import { add_games } from './feedPageSlice';

const FeedPage = () => {
    const feedPage = useSelector(state => state.feedPage);
    const dispatch = useDispatch();

    const getGamesCall = async () => {
        try {
            const data = await getGames();
            dispatch(add_games(data.results));
        } catch ( error ) {
            console.log(error);
        }
    }
    useEffect(() => {
        getGamesCall()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            Feed
        </>
    )
}

export default FeedPage;