import axios from "axios";
import { token } from "../token";
import {
  GET_MAIN_SLIDER,
  GET_CATEGORIES,
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
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/main-slider",
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
      "https://blackbox.eurodir.ru/wp-json/blackbox/v1/genres",
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
