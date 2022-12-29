import {types} from "../types";
const initialState ={
    user:{},
}
export default function OneUserReducer(state=initialState, action){

    switch (action.type){
        case types.GET_USER:
            return {user:action.payload}

        default: return state
    }
}