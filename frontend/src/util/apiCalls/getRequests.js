import axios from 'axios';

export const getGames = async () => {
    try {
        const { data } = await axios.get("https://api.rawg.io/api/games?page_size=600");
        return data;
    } catch ( error ) {
        throw error;
    }
}