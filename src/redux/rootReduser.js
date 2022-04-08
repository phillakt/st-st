import { combineReducers } from "redux";
import { films } from "./filmsReduser";

export const rootReduser = combineReducers({
    films
});