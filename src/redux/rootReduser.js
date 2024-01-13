import { combineReducers } from "redux";
import { films } from "./filmsReduser";
import { header } from "./headerReduser";
import { forms } from "./formsReduser";
import { pages } from "./pagesReduser";

export const rootReduser = combineReducers({
    films,
    header,
    forms,
    pages,
});