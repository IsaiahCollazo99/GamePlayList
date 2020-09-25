import axios from 'axios';

export const getGames = async ( next ) => {
    try {
        const { data } = next ? await axios.get(next) :
            await axios.get("https://api.rawg.io/api/games");
        return data;
    } catch ( error ) {
        throw error;
    }
}