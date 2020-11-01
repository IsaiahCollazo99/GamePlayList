import React, { useEffect } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchGames } from '../../util/apiCalls/getRequests';
import GameCard from '../gameCard/GameCard';
import { add_games, set_next } from './searchPageSlice';

const SearchPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const searchPage = useSelector(state => state.searchPage);

    const handleSearch = async () => {
        const { location: { state } } = history;
        const { search: historySearch } = state;

        let data = {};
        if(historySearch && !searchPage.search) {
            data = await searchGames(historySearch);
        } else {
            const search = historySearch === searchPage.search ? historySearch : searchPage.search;
            data = searchPage.next ? await searchGames(search, searchPage.next) : 
                                     await searchGames(search);
        }
        dispatch(set_next(data.next));
        dispatch(add_games(data.results));
    }
    
    useEffect(() => {
        handleSearch();
        dispatch(set_next(null));
    }, [searchPage.search]);

    useBottomScrollListener(handleSearch);

    const gamesDisplay = searchPage.games.map(( game, i ) => {
        return (
            <GameCard game={game} key={i} />
        )
    })

    return (
        <main className="searchPageContainer" style={{gridColumn: '2 / 3'}}>
            {gamesDisplay}
        </main>
    )
}

export default SearchPage;