import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer, ReducerSecond } from "./reducers";
import { middleware } from "./middlewares";
import {thunk} from "redux-thunk"

var store = configureStore({
    reducer: combineReducers({Reducer,ReducerSecond}),
    middleware:()=>[thunk]
})

export default store