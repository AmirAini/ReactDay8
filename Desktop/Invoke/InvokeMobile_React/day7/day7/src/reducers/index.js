//Combine reducers

import { combineReducers } from "redux";
import regUserReducers from "./regUserReducers";
import countReducer from "./countReducers";
import toDoReducers from "./toDoReducers";
import removeReducers from "./removeReducer";

export default combineReducers({
    regUser:regUserReducers,
    count: countReducer,
    todo: toDoReducers,
    remove: removeReducers,
});