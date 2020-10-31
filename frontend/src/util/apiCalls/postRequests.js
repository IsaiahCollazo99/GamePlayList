import axios from 'axios';
import { apiURL } from '../apiURL';

const API = apiURL();

export const signUpUser = async ( userData ) => {
    try {
        const res = await axios.post(API + "/api/users/?emailOnly=false", userData);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const createList = async ( list_name, list_owner, list_visibilty = 'public' ) => {
    try {
        const res = await axios.post(API + "/api/lists/", {list_name, list_owner, list_visibilty});
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const createDefaultLists = async ( userId ) => {
    try {
        const defaultLists = ["Owned", "Playing", "Shelved", "Wish List"];
        defaultLists.forEach(async ( listName ) => {
            await createList(listName, userId);
        })
    } catch ( error ) {
        throw error;
    }
}

export const addGameToList = async ( list_id, game_id ) => {
    try {
        const res = await axios.post(API + `/api/listGames/`, { list: list_id, list_game: game_id });
        return res.data;
    } catch ( error ) {
        throw error;
    }
}