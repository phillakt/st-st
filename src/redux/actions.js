import axios from "axios";
import $ from "jquery";
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
  GET_SEARCH_FILMS,
  GET_CATEGORY_CURRENT_LABELS_FILTER,
  CHANGE_EL_CHECKBOX_CURRENT_FILTER,
  RESET_MAIN_FILTER_CATEGORY_CURRENT,
} from "./typesFilms";

import { CHANGE_MOBILE_VIEW } from "./typesHeader";
import { GET_MANUAL_DESKTOP } from "./typePages";

// Films
export const getMainSlider = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'text/plain'
      },
    };

    var data = {
      request: '',
    };

    const response = await axios.post(
      `${dataServer.backend_v1}c=front:main.slider&action=films`,
      data,
      config
    );

    dispatch({
      type: GET_MAIN_SLIDER,
      mainSlider: response.data,
    });
  };
};

export const getMainSliderRandom = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'text/plain'
      },
    };
    const response = await axios.post(
      // `${dataServer.backend_v1}film-random`,
      `${dataServer.backend_v1}c=front:main.random&action=films`,
      {},
      config
    );

    dispatch({
      type: GET_MAIN_SLIDER_RANDOM,
      mainSliderRandom: response.data,
    });
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        // 'Authorization': `Bearer 123`,
        'Content-Type': 'text/plain',
      },
    };
    const response = await axios.post(
      `${dataServer.backend_v1}c=front:main.genres&action=films`,
      {},
      config
    );

    dispatch({
      type: GET_CATEGORIES,
      categories: response.data,
    });
  };
};

export const getMainFilterCategoryCurrent = (code, count) => {
  return async (dispatch) => {

    var data = {
      genre: code,
      count: count,
    };

    var request = $.ajax({
      url: `${dataServer.backend_v1}c=front:main.filter&action=films`,
      method: 'POST',
      data: data
    })

    request.done(function (response) {
      dispatch({
        type: GET_MAIN_FILTER_CATEGORY_CURRENT,
        mainFilterCategoryCurrent: {
          count,
          code,
          categoryPosts: response,
        },
      });
    });

  };
};


export const getFilmDetail = (code) => {
  if (code) {
    return async (dispatch) => {
      var data = {
        code,
      };
  
      var request = $.ajax({
        url: `${dataServer.backend_v1}c=front:film.detail&action=film`,
        method: 'POST',
        data
      });

      request.done(function (response) {
        dispatch({
          type: GET_FILM_DETAIL,
          filmDetail: response,
        });
      });
    };
  } else {
    return async (dispatch) => {
      dispatch({
        type: GET_FILM_DETAIL,
        filmDetail: {},
      });
    }
  }
};

export const getCategoryCurrent = (code, count, filterState) => {

  if (code) {
    const filterStateJson = JSON.stringify(filterState);

    return async (dispatch) => {
      var data = {
        category: code,
        count,
        filterState: filterStateJson,
      };
  
      var request = $.ajax({
        url: `${dataServer.backend_v1}c=front:genre.current&action=genre`,
        method: 'POST',
        data
      });

      request.done(function (response) {
        dispatch({
          type: GET_CATEGORY_CURRENT,
          code,
          count,
          categoryCurrent: response.categoryCurrent,
        });
      });
    };
  } else {
    return async (dispatch) => {
      dispatch({
        type: GET_CATEGORY_CURRENT,
        code: '',
        count: 0,
        categoryCurrent: [],
      })
    }
  }

};

export const getCategoryCurrentLabelsFilter = (code, currentYear) => {
  return async (dispatch) => {

    var data = {
      genre: code,
      activeFilterParam: currentYear ? currentYear : null
    };

    var request = $.ajax({
      url: `${dataServer.backend_v1}c=front:genre.current-filter&action=labels`,
      method: 'POST',
      data
    });

    request.done(function (response) {
      dispatch({
        type: GET_CATEGORY_CURRENT_LABELS_FILTER,
        filter: response,
      });
    });

  };
};

export const changeCheckedElCurrentFilter = (param) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_EL_CHECKBOX_CURRENT_FILTER,
      filtersProps: param,
    });
  };
};

export const getSearchFilms = (name) => {

  return async (dispatch) => {
    var data = {
      name
    };

    var request = $.ajax({
      url: `${dataServer.backend_v1}c=front:film.search&action=films`,
      method: 'POST',
      data
    });

    request.done(function (response) {
      dispatch({
        type: GET_SEARCH_FILMS,
        searchFilms: {
          searchInputValue: name,
          searchFilmsList: response,
        },
      });
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
    var data = {
      feedback: JSON.stringify(dataForm)
    };

    var request = $.ajax({
      url: `${dataServer.backend_v1}c=front:form.feedback&action=send`,
      method: 'POST',
      data
    });

    request.done(function (response) {
      dispatch({
        type: GET_FEEDBACK,
        feedback: response,
      });
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


// Pages

export const getManualDesktop = (code) => {
  return async (dispatch) => {

    const response = await axios.post(
      `${dataServer.backend_v1}manual-desktop`,
      {
        name: JSON.stringify(code),
      }
    );

    dispatch({
      type: GET_MANUAL_DESKTOP,
      manualDesktop: response.data,
    });
  }
}

// Pages end
