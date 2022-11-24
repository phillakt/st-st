import {
  GET_MAIN_SLIDER,
  GET_CATEGORIES,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
  GET_CATEGORY_CURRENT,
  GET_CATEGORY_CURRENT_FILTER,
  CHANGE_EL_CHECKBOX_CURRENT_FILTER,
  GET_ALL_FILMS,
  GET_ALL_FILMS_LENGTH,
  GET_SEARCH_FILMS,
  GET_SEARCH_FILMS_PAGE,
} from "./typesFilms";

const initState = {
  mainSlider: [],
  categories: [],
  categoryCurrent: {
    count: 0,
    slug: "",
    categoryData: {},
    categoryPosts: [],
    categoryAllCountPosts: 0,
    _filter: undefined,
  },
  mainFilterCategoryCurrent: {
    count: 0,
    slug: "",
    categoryPosts: [],
  },
  mainSliderRandom: [],
  filmDetail: {},
  allFilms: [],
  allFilmsLength: 0,
  searchFilms: {
    searchInputValue: "",
    searchWrap: false,
    searchFilmsList: [],
  },
  searchFilmsPage: {
    searchFilmsPageInputValue: "",
    searchFilmsPageList: [],
  },
  filtersProps: [
    {
      title: "По годам",
      type: "checkbox",
      param: "year",
      list: [
        {
          text: "За",
          value: "2022",
          checked: false,
        },
        {
          text: "За",
          value: "2021",
          checked: false,
        },
        {
          text: "За",
          value: "2020",
          checked: false,
        },
        {
          text: "За",
          value: "2019",
          checked: false,
        },
      ],
    },
  ],
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
    case GET_CATEGORY_CURRENT:
      return {
        ...state,
        categoryCurrent: {
          count: action.count,
          slug: action.slug,
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

    case GET_ALL_FILMS:
      return {
        ...state,
        allFilms: action.allFilms,
      };
      
    case GET_ALL_FILMS_LENGTH:
      return {
        ...state,
        allFilmsLength: action.allFilmsLength,
      };

    case GET_SEARCH_FILMS:
      const searchInputValue = action.searchFilms.searchInputValue;
      const searchWrap = action.searchFilms.searchFilmsList.length ? true : false;
      const searchFilmsList = action.searchFilms.searchFilmsList;
      return {
        ...state,
        searchFilms: {
          searchInputValue,
          searchWrap,
          searchFilmsList,
        },
      };

    case GET_SEARCH_FILMS_PAGE:
      const searchFilmsPageInputValue = action.searchFilmsPage.searchFilmsPageInputValue;
      const searchFilmsPageList = action.searchFilmsPage.searchFilmsPageList;
      return {
        ...state,
        searchFilmsPage: {
          searchFilmsPageInputValue,
          searchFilmsPageList,
        },
      };
    default:
      return state;
  }
};
