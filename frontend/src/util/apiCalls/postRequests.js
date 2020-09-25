import axios from 'axios';
import { apiURL } from '../apiURL';

const API = apiURL();
let userId = 2;

export const signUpUser = async ( userData ) => {
    try {
        userData.id = userId;
        const res = await axios.post(API + "/api/users", userData);
        userId++;
        console.log(res);
    } catch ( error ) {
        throw error;
    }
}