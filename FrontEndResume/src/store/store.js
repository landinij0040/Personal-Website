import { configureStore } from '@reduxjs/toolkit';
import offcanvasReducer from './MyOffcanvasSlice';

export default configureStore({
    reducer: {
        offcanvas:offcanvasReducer,
    },
});

