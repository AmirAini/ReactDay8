import * as type from "../types";

const defaultState = {
    isLoading: false,
    data: [],
    error: null,
};

const regUserReducers = (state,action) => {
    switch (action.type){

        //add user
        case type.ADD_USER:
            return {
                isLoading: true,
                data:[...state.data],
                error:null,
            };
        
            case type.ADD_USER_SUCCESS:
            return {
                isLoading: false,
                data: [...state.data,action.payload],
                error: null,
            };

            case type.ADD_USER_FAIL:
            return {
                isLoading: false,
                data:[...state.data],
                error: action.error,
            };

        default:
            return defaultState;
    }
}

export default regUserReducers;