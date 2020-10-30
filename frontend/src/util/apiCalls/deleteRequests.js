import axios from 'axios';
import { apiURL } from '../apiURL';
const API = apiURL();

export const removeGameFromList = async ( list_id, game_id ) => {
    try {
        const res = await axios.delete(API + `/api/lists/${list_id}/games/${game_id}`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const deleteList = async ( list_id ) => {
    try {
        const res = await axios.delete(API + `/api/lists/${list_id}`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}