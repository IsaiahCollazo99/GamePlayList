import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const reducer = () => {};
const middleware = [...getDefaultMiddleware()];

const Store = configureStore({
    reducer,
    middleware
});

export default Store;