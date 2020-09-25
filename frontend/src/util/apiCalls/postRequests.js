import axios from 'axios';
import { apiURL } from '../apiURL';

const API = apiURL();
let userId = 2;

export const signUpUser = async ( userData ) => {
    try {
        userData.id = userId;
        const res = await axios.post(API + "/api/users", userData);
        userId++;
        return res.data;
    } catch ( error ) {
        throw error;
    }
}

export const createList = async ( list_name, list_owner ) => {
    try {
        const res = await axios.post(API + "/api/lists", {list_name, list_owner});
        console.log(res);
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