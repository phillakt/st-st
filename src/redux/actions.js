import axios from "axios";
import { token } from "../token";
import {
  GET_MAIN_SLIDER,
  GET_MAIN_FILTER,
  GET_MAIN_FILTER_CATEGORY_CURRENT,
  GET_MAIN_SLIDER_RANDOM,
  GET_FILM_DETAIL,
} from "./types";

export const getMainSlider = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/films",
      {},
      config
    );

    dispatch({
      type: GET_MAIN_SLIDER,
      films: response.data,
    });
  };
};

export const getMainFilter = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/genres",
      {},
      config
    );

    dispatch({
      type: GET_MAIN_FILTER,
      mainFilter: response.data,
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
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/main-filter-category-current",
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
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/film-random",
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
  return async (dispatch) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/film-id",
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
};
