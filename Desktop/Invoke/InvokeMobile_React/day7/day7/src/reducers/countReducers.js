import * as type from "../types";

//! state and action type (logic)
//! state must have a default value

//? store listener: countReducer

const countReducer = (state=0,action) => {
    switch(action.type) {
        
        //add click
        case type.ADD_COUNT:
            return state += action.payload;
        
        //minus click
        case type.MINUS_COUNT:
            return state += action.payload;

        default:
            return state;
    }
}

export default countReducer;