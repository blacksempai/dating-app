import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsReducer';
import dialogsReducer from './dialogsReducer';

const store = configureStore({
    reducer: {
        postsState: postsReducer,
        dialogsState: dialogsReducer
    }
});

export default store;