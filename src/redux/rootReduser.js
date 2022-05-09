import { combineReducers } from "redux";
import { films } from "./filmsReduser";
import { header } from "./headerReduser";

export const rootReduser = combineReducers({
    films,
    header,
});