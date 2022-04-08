import {
  GET_MAIN_SLIDER,
  GET_MAIN_FILTER,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
} from "./types";

const initState = {
  items: [],
  mainFilter: [],
  mainFilterCategoryCurrent: {
    count: 0,
    slug: "",
    categoryPosts: [],
  },
  mainSliderRandom: [],
  filmDetail: {},
};

export const films = (state = initState, action) => {
  switch (action.type) {
    case GET_MAIN_SLIDER:
      return {
        ...state,
        items: action.films,
      };
    case GET_MAIN_FILTER:
      return {
        ...state,
        mainFilter: action.mainFilter,
      };
    case GET_MAIN_FILTER_CATEGORY_CURRENT:
      return {
        ...state,
        mainFilterCategoryCurrent: {
          slug: action.mainFilterCategoryCurrent.slug,
          count: action.mainFilterCategoryCurrent.count,
          categoryPosts: action.mainFilterCategoryCurrent.categoryPosts,
        },
      };
    case GET_MAIN_SLIDER_RANDOM:
      return {
        ...state,
        mainSliderRandom: action.mainSliderRandom,
      };
    case GET_FILM_DETAIL:
      return {
        ...state,
        filmDetail: action.filmDetail,
      };
    default:
      return state;
  }
};
