import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getList } from '../../util/apiCalls/getRequests';
import '../../css/listDisplay/listDisplay.css';
import GameCard from '../gameCard/GameCard';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const ListDisplay = () => {
    const { id: listId } = useParams();
    const [ list, setList ] = useState({});
    const [ games, setGames ] = useState([]);
    const [ offset, setOffset ] = useState(0);
    const [ loading, setLoading ] = useState(false);

    const getListCall = async () => {
        try { 
            const data = await getList(listId);
            setList(data);
            getGameDescriptions(data.games);
        } catch ( error ) {
            console.log(error);
        }
    }

    useEffect(() => {
        getListCall();
        setGames([]);
        setOffset(0);
        setLoading(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listId]);

    const getGameDescriptions = async ( listGames = list.games ) => {
        try {
            const res = [];
            const length = listGames.length;
            setLoading(true)

            for(let i = offset; i < length; i++) {
                if(i === offset + 30) break;
                const game = listGames[i];
                const gameDisplay = {
                    id: game.list_game, 
                    background_image: game.background_image,
                    name: game.game_name
                }
                res.push(gameDisplay);
            }

            setGames(prevState => [...prevState, ...res]);

            if(length >= offset + 30) {
                setOffset(prevState => prevState + 30);
            } else {
                setOffset(length)
            }

            setLoading(false);
        } catch ( error ) {
            console.log(error);
        }
    }

    const gamesList = games.map((game, i) => {
        return (
            <GameCard game={game} key={i} />
        )
    })

    useBottomScrollListener(getGameDescriptions)

    return (
        <section className="listDisplayContainer">
            <h1>{list.list_name}</h1>
            <section className="gamesList">
                {gamesList}
                {loading ? <p className="loading">Loading...</p> : null}
            </section>
        </section>
    )
}

export default ListDisplay;