import { configureStore } from "@reduxjs/toolkit";
import revReducer from './reviewsSlice'

export default configureStore({
    reducer: {
        rev: revReducer,
    }
})