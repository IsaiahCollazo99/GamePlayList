import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import signUp from './features/signUp/signUpSlice';
import signIn from './features/signIn/signInSlice';
import feedPage from './features/feedPage/feedPageSlice';
import lists from './features/gameCard/listsSlice';
import logger from 'redux-logger';

const reducer = {
    signUp,
    signIn,
    feedPage,
    lists,
};
const middleware = [...getDefaultMiddleware(), logger];

const Store = configureStore({
    reducer,
    middleware
});

export default Store;