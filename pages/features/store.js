import { configureStore } from "@reduxjs/toolkit";
import pageSelectReducer from '../features/reducers/pageSelect'

export const store = configureStore({
    reducer: {
        pageReducer: pageSelectReducer
    }
})