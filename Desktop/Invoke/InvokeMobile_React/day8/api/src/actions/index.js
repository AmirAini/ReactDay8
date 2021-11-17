import { FETCH_MOVIE, FETCH_MOVIE_FAIL, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAIL, FETCH_MOVIE_DETAILS } from "../types";
import axios from "axios";

//pass in data
export const fetchMovie = (data) => (dispatch) => {
    dispatch(
        {
            type: FETCH_MOVIE,
            payload: data,
        })
    try{
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f77113aa&s=${data}`)
        .then((res) => {
            console.log('res..',res);
            if(res.status == 200 && res.data.Response== "True") {
                dispatch({
                    type: FETCH_MOVIE_SUCCESS,
                    payload: res.data,
                })
            } else {
                alert(res.data.Error)
            }
        })
        //!if fail
        .catch((error)=> {
            console.log('error1',error.response.data.Error);
            dispatch({
                type: FETCH_MOVIE_FAIL,
                error:error.response.data.Error,
            })
        });

    }catch(error){
        console.log('error2',error);
        dispatch({
            type: FETCH_MOVIE_FAIL,
            error: error,
        })
    }

    
};

export const fetchMovieDetails = (data) => (dispatch) => {
    dispatch({
        type: FETCH_MOVIE_DETAILS,
    })

    try {
        axios.get(`http://www.omdbapi.com/?apikey=f77113aa&i=${data}`)
        .then((res)=> {
            if(res.status == 200){
                dispatch({
                    type: FETCH_MOVIE_DETAILS_SUCCESS,
                    payload: res.data
                })
            }
            
        })
        .catch((error) => {
            console.log('error', error);
            dispatch({
                type: FETCH_MOVIE_DETAILS_FAIL,
                error: error.response.data
            })
            
        })

    } catch(error){
        dispatch({
            type: FETCH_MOVIE_DETAILS_FAIL,
            error:error.response.data
        })
    }
}