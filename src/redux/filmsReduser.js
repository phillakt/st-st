import {
  GET_MAIN_SLIDER,
  GET_CATEGORIES,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
  GET_CATEGORY_CURRENT,
  GET_CATEGORY_CURRENT_FILTER,
  CHANGE_EL_CHECKBOX_CURRENT_FILTER,
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
        {
          text: "За",
          value: "2018",
          checked: false,
        },
        {
          text: "За",
          value: "2017",
          checked: false,
        },
        {
          text: "За",
          value: "2016",
          checked: false,
        },
        {
          text: "За",
          value: "2015",
          checked: false,
        },
      ],
    },
    // {
    //   title: "Сортировка",
    //   param: "sort",
    //   type: "radio",
    //   list: [
    //     {
    //       text: "От старых к новым",
    //       value: "ASC",
    //       checked: false,
    //     },
    //     {
    //       text: "От новых к старым",
    //       value: "DESC",
    //       checked: false,
    //     },
    //   ],
    // },
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
            if(item.param === action.filtersProps.param){
              return {
                ...item,
                list: [
                  ...item.list.map((_item) => {
                    if(_item.value === action.filtersProps.value){
                      _item.checked = !_item.checked;
                      return _item;
                    }
                    return _item;
                  }),
                ]
              }
            }
            return item;
          })
        ] 
      };
    default:
      return state;
  }
};
