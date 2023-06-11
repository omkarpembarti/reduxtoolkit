import { createSlice } from "@reduxjs/toolkit";
const initialState = [];


const cartslice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(s => {
                if (s.id !== action.payload)
                    return true;
                return false;
            })
        }
    }
})


export const { add, remove } = cartslice.actions;
export default cartslice.reducer;