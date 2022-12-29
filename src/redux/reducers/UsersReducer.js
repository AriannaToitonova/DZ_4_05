import {types} from "../types";

const initialState ={
    users:[],
    user:[],
}


export default function UsersReducer(state= initialState, action){
    switch (action.type){
        case  types.GET_USERS:
            return {...state, users: action.payload}
        default: return state
    }
};
