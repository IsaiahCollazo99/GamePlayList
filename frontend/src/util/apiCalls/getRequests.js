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

export const getUserByUsername = async ( username ) => {
    try {
        const res = await axios.get(API + "/api/users/username/" + username);
        return res.data;
    } catch ( error ) {
        throw error;
    }
}