import { createSlice } from "@reduxjs/toolkit";

const pageSelectReducer = createSlice({
    name: 'pageSelect',
    initialState: {
        value: null,
    },
    reducers: {
        pageSelected: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { pageSelected } = pageSelectReducer.actions
export default pageSelectReducer.reducer