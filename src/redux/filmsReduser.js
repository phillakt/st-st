import {
  GET_MAIN_SLIDER,
  GET_CATEGORIES,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
  GET_CATEGORY_CURRENT,
  GET_CATEGORY_CURRENT_FILTER,
  GET_SEARCH_FILMS,
  GET_CATEGORY_CURRENT_LABELS_FILTER,
  CHANGE_EL_CHECKBOX_CURRENT_FILTER,
  RESET_MAIN_FILTER_CATEGORY_CURRENT
} from "./typesFilms";

const initState = {
  mainSlider: [],
  categories: [],
  categoryCurrent: {
    count: 0,
    code: "",
    categoryData: {},
    categoryPosts: [],
    categoryAllCountPosts: 0,
    _filter: undefined,
  },
  mainFilterCategoryCurrent: {
    count: 0,
    code: "",
    categoryPosts: [],
    changeCategory: false
  },
  mainSliderRandom: [],
  filmDetail: {},
  searchFilms: {
    searchInputValue: "",
    searchFilmsList: [],
  },
  filtersProps: [],
};

export const films = (state = initState, action) => {
  switch (action.type) {
    case GET_MAIN_SLIDER:
      return {
        ...state,
        mainSlider: action.mainSlider,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case GET_MAIN_FILTER_CATEGORY_CURRENT:
      return {
        ...state,
        mainFilterCategoryCurrent: {
          code: action.mainFilterCategoryCurrent.code,
          count: action.mainFilterCategoryCurrent.count,
          categoryPosts: action.mainFilterCategoryCurrent.categoryPosts,
          changeCategory: true
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
    case GET_CATEGORY_CURRENT:
      return {
        ...state,
        categoryCurrent: {
          count: action.count,
          code: action.code,
          categoryData: action.categoryCurrent.categoryData,
          categoryPosts: action.categoryCurrent.posts,
          categoryAllCountPosts: action.categoryCurrent.queryPostsAllCount,
          _filter: action.categoryCurrent.filter,
        },
      };
    case GET_CATEGORY_CURRENT_FILTER:
      return {
        ...state,
        categoryCurrent: {
          categoryPostsFilter: action.categoryCurrent.posts,
        },
      };
    case CHANGE_EL_CHECKBOX_CURRENT_FILTER:
      return {
        ...state,
        filtersProps: [
          ...state.filtersProps.map((item) => {
            if (item.param === action.filtersProps.param) {
              return {
                ...item,
                list: [
                  ...item.list.map((_item) => {
                    if (_item.value === action.filtersProps.value) {
                      _item.checked = !_item.checked;
                      return _item;
                    }
                    return _item;
                  }),
                ],
              };
            }
            return item;
          }),
        ],
      };
    case GET_SEARCH_FILMS:
      const searchInputValue = action.searchFilms.searchInputValue;
      const searchFilmsList = action.searchFilms.searchFilmsList;
      return {
        ...state,
        searchFilms: {
          searchInputValue,
          searchFilmsList,
        },
      };
    case GET_CATEGORY_CURRENT_LABELS_FILTER: 
      return {
        ...state,
        filtersProps: [
          {
            title: action.filter.title,
            param: action.filter.param,
            type: action.filter.type,
            list: action.filter.list
          }
        ],
      };
    case RESET_MAIN_FILTER_CATEGORY_CURRENT:
      return {
        ...state,
        mainFilterCategoryCurrent: {
          count: 0,
          code: "",
          categoryPosts: [],
          changeCategory: true
        },
      };
    default:
      return state;
  }
};
