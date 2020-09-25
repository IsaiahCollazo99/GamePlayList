import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import signUp from './features/signUp/signUpSlice';
import feedPage from './features/feedPage/feedPageSlice';

const reducer = {
    signUp,
    feedPage,
};
const middleware = [...getDefaultMiddleware()];

const Store = configureStore({
    reducer,
    middleware
});

export default Store;