import {combineReducers} from "redux"
import UsersReducer from "./UsersReducer"
import OneUserReducer from "./OneUserReducer";

export const rootReducer = combineReducers({
    UsersReducer,
    OneUserReducer

})