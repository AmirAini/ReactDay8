import * as type from "../types";

const defaultState = {
    isLoading: false,
    data: [],
    error: null,
};

const toDoReducers = (state =defaultState,action) => {
    
    
    switch(action.type)
    {
        case type.ADD_TODO:
            return {
                isLoading: true,
                data:[...state.data],
                error:null,
            };
            // [...state,action.payload]
        
        case type.ADD_TODO_SUCCESS:
            return {
                isLoading: false,
                data: [...state.data,action.payload],
                error: null,
            };

        case type.ADD_TODO_FAIL:
            return {
                isLoading: false,
                data:[...state.data],
                error: action.error,
            };

        default:
            return defaultState;
    }
}

export default toDoReducers;