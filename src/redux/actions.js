import axios from "axios";
import { token } from "../token";
import { dataServer } from "../dataServer/dataServer";
import { GET_FEEDBACK, SET_FEEDBACK_SUCCESS } from "./typeForms";
import {
  GET_MAIN_SLIDER,
  GET_CATEGORIES,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
  GET_CATEGORY_CURRENT,
  GET_ALL_FILMS,
  GET_ALL_FILMS_LENGTH,
  GET_SEARCH_FILMS,
  GET_SEARCH_FILMS_PAGE,
  GET_CATEGORY_CURRENT_LABELS_FILTER,
  CHANGE_EL_CHECKBOX_CURRENT_FILTER,
  RESET_MAIN_FILTER_CATEGORY_CURRENT,
} from "./typesFilms";

import { CHANGE_MOBILE_VIEW } from "./typesHeader";

// Films
export const getMainSlider = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${dataServer.backendJsonV1}main-slider`,
      {},
      config
    );

    dispatch({
      type: GET_MAIN_SLIDER,
      mainSlider: response.data,
    });
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${dataServer.backendJsonV1}genres`,
      {},
      config
    );

    dispatch({
      type: GET_CATEGORIES,
      categories: response.data,
    });
  };
};

export const getMainFilterCategoryCurrent = (slug, count) => {
    return async (dispatch) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${dataServer.backendJsonV1}main-filter-category-current`,
        {
          category: slug,
          count: count,
        },
        config
      );
        
      dispatch({
        type: GET_MAIN_FILTER_CATEGORY_CURRENT,
        mainFilterCategoryCurrent: {
          count,
          slug,
          categoryPosts: response.data,
        },
      });
    };
};

export const getMainSliderRandom = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${dataServer.backendJsonV1}film-random`,
      {},
      config
    );

    dispatch({
      type: GET_MAIN_SLIDER_RANDOM,
      mainSliderRandom: response.data,
    });
  };
};

export const getFilmDetail = (slug) => {
  if(slug){
    return async (dispatch) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `${dataServer.backendJsonV1}film-id`,
        {
          name: slug,
        },
        config
      );

      dispatch({
        type: GET_FILM_DETAIL,
        filmDetail: response.data,
      });
    };
  }else {
    return async (dispatch) => {
      dispatch({
        type: GET_FILM_DETAIL,
        filmDetail: {},
      });
    }
  }
};

export const getCategoryCurrent = (slug, count, filterState) => {
  if(slug){
    const filterStateJson = JSON.stringify(filterState);

    return async (dispatch) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.post(
        `${dataServer.backendJsonV1}category-current`,
        {
          category: slug,
          count,
          filterState: filterStateJson,
        },
        config
      );
  
      dispatch({
        type: GET_CATEGORY_CURRENT,
        slug,
        count,
        categoryCurrent: response.data,
      });
    };
  }else {
    return async (dispatch) => {
      dispatch({
        type: GET_CATEGORY_CURRENT,
        slug: '',
        count: 0,
        categoryCurrent: [],
      })
    }
  }

};

export const changeCheckedElCurrentFilter = (param) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_EL_CHECKBOX_CURRENT_FILTER,
      filtersProps: param,
    });
  };
};

export const getAllFilms = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${dataServer.backendJsonV1}all-films`,
      {},
      config
    );

    dispatch({
      type: GET_ALL_FILMS,
      allFilms: response.data,
    });
  };
};

export const getAllFilmsLength = (slug) => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${dataServer.backendJsonV1}all-films-length`,
      {
        category: slug,
      },
      config
    );

    dispatch({
      type: GET_ALL_FILMS_LENGTH,
      allFilmsLength: response.data,
    });
  };
};

export const getSearchFilms = (val, searchList) => {
  return (dispatch) => {
    dispatch({
      type: GET_SEARCH_FILMS,
      searchFilms: {
        searchInputValue: val,
        searchFilmsList: searchList,
      },
    });
  };
};

export const getSearchFilmsPage = (val, searchList) => {
  return {
    type: GET_SEARCH_FILMS_PAGE,
    searchFilmsPage: {
      searchFilmsPageInputValue: val,
      searchFilmsPageList: searchList,
    },
  };
};

export const getCategoryCurrentLabelsFilter = (slug) => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${dataServer.backendJsonV1}category-current-labels-filter`,
      {
        category: slug,
      },
      config
    );
    
    dispatch({
      type: GET_CATEGORY_CURRENT_LABELS_FILTER,
      filter: response.data,
    });
  };
};

export const resetMainFilterCategoryCurrent = () => {
  return async (dispatch) => {
    dispatch({
      type: RESET_MAIN_FILTER_CATEGORY_CURRENT
    })
  }
}


// Films end

// Header
export const changeMenuMobileView = (view) => {
  return {
    type: CHANGE_MOBILE_VIEW,
    menuMobile: view,
  };
};
// Header end

// scrollTo

export const wScrollTo = () => {
  window.scrollTo(0, 0);
}
// scrollTo end

// Form
export const getFeedBack = (dataForm) => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${dataServer.backendJsonV1}feedback`,
      {
        feedback: JSON.stringify(dataForm),
      },
      config
    );

    dispatch({
      type: GET_FEEDBACK,
      feedback: JSON.parse(response.data),
    });
  };
};

export const setFeedBackSuccess = (successStatus) => {
  return {
    type: SET_FEEDBACK_SUCCESS,
    success: successStatus,
  };
};
// Form end
