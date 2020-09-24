import { configureStore, useDefaultMiddleware } from '@reduxjs/toolkit';

const reducer = () => {};
const middleware = [...useDefaultMiddleware()];

const Store = configureStore({
    reducer,
    middleware
});

export default Store;