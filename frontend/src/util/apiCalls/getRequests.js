import axios from 'axios';
import { apiURL } from '../apiURL';
const API = apiURL();

export const getGames = async ( next ) => {
    try {
        const res = next ? await axios.get(next) :
            await axios.get("https://api.rawg.io/api/games?page_size=30");
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getUserByUsername = async ( username ) => {
    try {
        const res = await axios.get(API + "/api/users/username/" + username);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}