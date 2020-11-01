import React, { useEffect } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchGames } from '../../util/apiCalls/getRequests';
import GameCard from '../gameCard/GameCard';
import { add_games, set_next, set_search, new_search_results } from './searchPageSlice';
import '../../css/searchPage/searchPage.css';
import SearchBar from '../general/SearchBar';

const SearchPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const searchPage = useSelector(state => state.searchPage);

    const handleSearch = async () => {
        const { location: { state } } = history;
        const { search: historySearch } = state;

        let data = {};
        if(historySearch === searchPage.search) {
            data = searchPage.next ? await searchGames(historySearch, searchPage.next) :
                                     await searchGames(historySearch);
        } else {
            data = searchPage.next ? await searchGames(searchPage.search, searchPage.next) : 
                                     await searchGames(searchPage.search);
        }
        dispatch(set_next(data.next));
        dispatch(add_games(data.results));
    }

    const preSearch = ( search ) => {
        dispatch(set_next(null));
        dispatch(new_search_results([]));
        dispatch(set_search(search));
    }

    useEffect(() => {
        const { location: { state } } = history;
        const { search: historySearch } = state;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch(set_search(historySearch))
    }, [])
    
    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchPage.search]);

    useBottomScrollListener(handleSearch);

    const gamesDisplay = searchPage.games.map(( game, i ) => {
        return (
            <GameCard game={game} key={i} />
        )
    })

    return (
        <main className="searchPageContainer">
            <SearchBar handleSearch={preSearch} />
            {gamesDisplay}
        </main>
    )
}

export default SearchPage;