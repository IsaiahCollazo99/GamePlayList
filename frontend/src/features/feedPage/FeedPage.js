import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../util/apiCalls/getRequests';
import { add_games, set_next } from './feedPageSlice';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import '../../css/feedPage/feedPage.css';
import GameCard from '../gameCard/GameCard';
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '60%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const FeedPage = () => {
    const classes = useStyles();
    const [ loading, setLoading ] = useState(false);
    const [ search, setSearch ] = useState("");
    const feedPage = useSelector(state => state.feedPage);
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

    const handleSearch = ( e ) => {
        e.preventDefault()
        console.log(search);
    }

    const handleChange = ( e ) => {
        setSearch(e.target.value);
    }

    const gamesDisplay = feedPage.games.map(( game, i ) => {
        return (
            <GameCard game={game} key={i} />
        )
    })
    
    return (
        <main className="feedPageContainer">
            <section className="gamesList">
                <Paper component="form" onSubmit={handleSearch} className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search A Game Title"
                        inputProps={{ 'aria-label': 'search a game title' }}
                        value={search}
                        onChange={handleChange}
                    />
                    <IconButton type="submit" aria-label="search" className={classes.iconButton}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                
                {gamesDisplay}
                {loading ? <p>Loading...</p> : null}
            </section>
        </main>
    )
}

export default FeedPage;