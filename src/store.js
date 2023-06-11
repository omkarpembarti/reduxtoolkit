import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";



const reducer = combineReducers({
    cartslice: cartslice
})
const store = configureStore({
    reducer,
})




export default store;