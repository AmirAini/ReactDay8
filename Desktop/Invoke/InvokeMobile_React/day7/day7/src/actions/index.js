import * as type from "../types";

//!Add register
export const regUser = (data) => (dispatch) => {
    try {
        dispatch({    
            type: type.ADD_USER,
        })
        setTimeout(()=> {
            dispatch({
                type: type.ADD_USER_SUCCESS,
                payload: data,
            })
        },5000)
    }
    catch(error){
        dispatch({
            type: type.ADD_USER_FAIL,
            error:error,
        })
    }
}

export const addSubmit = (num) =>{
    return {
        type: type.ADD_COUNT,
        payload: num,
    }
}

export const minusSubmit = (num) => {
    return {
        type: type.MINUS_COUNT,
        payload: num,
    }
}

export const addToDo = (data) => (dispatch) => {
try {
    dispatch({    
        type: type.ADD_TODO,
    })
    setTimeout(()=> {
        dispatch({
            type: type.ADD_TODO_SUCCESS,
            payload: data,

        })
    },5000)
}

catch(error){
    dispatch({
        type: type.ADD_TODO_FAIL,
        error:error,
    })
}}

export const toDel = (data) => (dispatch) => {
    try {
        dispatch({
            type: type.REMOVE_TODO,
        })
        setTimeout(() => {
            dispatch({
                type: type.REMOVE_TODO_SUCCESS,
                payload: data,
            })
        }, 1000);
    }

    catch(error){
        dispatch({
            type: type.REMOVE_TODO_FAIL,
            error:error,
        })
    }
}