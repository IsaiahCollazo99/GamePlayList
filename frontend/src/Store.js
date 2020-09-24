import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import signUp from './features/signUp/signUpSlice';

const reducer = {
    signUp
};
const middleware = [...getDefaultMiddleware()];

const Store = configureStore({
    reducer,
    middleware
});

export default Store;