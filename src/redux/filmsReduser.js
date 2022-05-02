import {
  GET_MAIN_SLIDER,
  GET_CATEGORIES,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
  GET_CATEGORY_CURRENT,
} from "./types";

const initState = {
  mainSlider: [],
  categories: [],
  categoryCurrent: {
    count: 0,
    slug: "",
    categoryData: {},
    categoryPosts: [],
  },
  mainFilterCategoryCurrent: {
    count: 0,
    slug: "",
    categoryPosts: [],
  },
  mainSliderRandom: [],
  filmDetail: {},
  filtersProps: [
    {
      title: "По годам",
      slug: "year",
      type: "checkbox",
      value: [
        {
          title: "За",
          prop: "2022",
        },
        {
          title: "За",
          prop: "2021",
        },
      ]
    },
    {
      title: "Сортировка",
      slug: "sort",
      type: "radio",
      value: [
        {
          title: "От старых к новым",
          prop: "ASC",
        },
        {
          title: "От новых к старым",
          prop: "DESC",
        },
      ]
    },
  ]
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
          categoryPosts: action.categoryCurrent.posts
        }
      }
    default:
      return state;
  }
};
