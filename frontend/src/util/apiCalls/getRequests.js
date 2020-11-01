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

export const searchGames = async ( search, next ) => {
    try {
        console.log(next);
        const res = next ? await axios.get(next) :
            await axios.get("https://api.rawg.io/api/games?page_size=30&search=" + search);
        
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getSystems = async ( next ) => {
    try {
        const systems = [];
        let res = await axios.get("https://api.rawg.io/api/platforms");
        systems.push(...res.data.results);
        while(res.data.next) {
            res = await axios.get(res.data.next);
            systems.push(...res.data.results);
        }
            
        return systems;
    } catch ( error ) {
        throw error;
    }
}
export const getGenres = async ( ) => {
    try { 
        const genres = [];
        let res = await axios.get("https://api.rawg.io/api/genres");
        genres.push(...res.data.results);
        while(res.data.next) {
            res = await axios.get(res.data.next);
            genres.push(...res.data.results);
        }
            
        return genres;
    } catch ( error ) {
        throw error;
    }
}

export const getPublishers = async ( ) => {
    try { 
        const publishers = [];
        let res = await axios.get("https://api.rawg.io/api/publishers");
        publishers.push(...res.data.results);
        let i = 0;
        while(res.data.next && i < 5) {
            console.log(publishers);
            res = await axios.get(res.data.next);
            publishers.push(...res.data.results);
            i++;
        }
            
        return publishers;
    } catch ( error ) {
        throw error;
    }
}

export const getFilters = async () => {
    try {
        const systems = await getSystems();
        const genres = await getGenres();
        const publishers = await getPublishers();
        return { systems, genres, publishers };
    } catch ( error ) {
        throw error;
    }
}

export const getUserByEmail = async ( email ) => {
    try { 
        const res = await axios.get(API + `/api/users/email/?email=${email}`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getUserByUsername = async ( username ) => {
    try {
        const res = await axios.get(API + `/api/users/username/?username=${username}`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getUserById = async ( userId ) => {
    try {
        const res = await axios.get(API + "/api/users/" + userId + "/");
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getUserLists = async ( userId ) => {
    try {
        const res = await axios.get(API + `/api/users/${userId}/lists/`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getList = async ( list_id ) => {
    try {
        const res = await axios.get(API + `/api/lists/${list_id}/`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const getGameById = async ( gameId ) => {
    try {
        const res = await axios.get(`https://api.rawg.io/api/games/${gameId}`);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}