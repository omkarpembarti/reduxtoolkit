import { createSlice } from "@reduxjs/toolkit";
const initialState = [];


const cartslice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        add(state, payload) {
            state.push(payload);
        },
        remove(state, payload) { }
    }
})


export const { add, remove } = cartslice.actions;
export default cartslice.reducer;