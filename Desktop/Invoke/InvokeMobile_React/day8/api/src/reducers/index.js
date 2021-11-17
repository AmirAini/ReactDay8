import { combineReducers } from "redux";
import fetchMovieReducer from "./fetchMovieReducer";
import fetchMovieDetails from "./fetchMovieDetails";

export default combineReducers({
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetails,
});