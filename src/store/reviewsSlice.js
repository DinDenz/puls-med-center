import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    reducers: {
        addRev(state, action) {
            console.log(action);
            console.log(state);
            state.reviews.push({
                id: new Date().toISOString(),
                userName: action.payload.userName,
                text: action.payload.text,

            })
        },
        deleteRev(state, action) { },
    }
})

export const {addRev, deleteRev} = reviewsSlice.actions;
export default reviewsSlice.reducer;