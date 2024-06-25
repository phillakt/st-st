import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import style from "./Search.module.scss";
import searchIco from "../img/svg/icons/search_ico.svg";

import { getSearchFilms } from "../redux/actions";

import CardFlat from "../components/CardFlat/CardFlat";
import { dataServer } from "../dataServer/dataServer";

const Search = () => {
  const dispatch = useDispatch();
  const searchFilms = useSelector(
    (selector) => selector.films.searchFilms
  );
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    const paramRequest = searchParams.get("q");
    getSearchFilmsHandler(paramRequest);
  }, [location.search]);

  const getSearchFilmsHandler = (name) => {
    if (name) {
      dispatch(getSearchFilms(name));
    } else {
      dispatch(getSearchFilms(""));
    }
  };

  return (
    <>
      <Helmet>
        <title>{`ST-ST — Поиск`}</title>
        <meta name="description" content={`Поиск по названию фильмов`} />
        <link rel="canonical" href={`https://${dataServer.host}/search`} />
      </Helmet>

      <section className="_pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className={style.title}>Поиск по названию</h1>
            </div>
            <div className="col-lg-12">
              <div className={`${style.title_search} _mt-30`}>
                Вы искали: «{searchFilms.searchInputValue}»
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${style.title_found} _mt-30`}>
                Найдено: «{searchFilms.searchFilmsList.length}»
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <form
                autoComplete="off"
                className={style.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  getSearchFilmsHandler(valueInput);
                  setValueInput("");
                }}>
                <input
                  className={style.search_input}
                  type="text"
                  placeholder="Введите название фильма"
                  value={valueInput}
                  onChange={(e) => {
                    setValueInput(e.target.value);
                  }}
                />
                <button type="submit" className={style.btn__search_view}>
                  <img src={searchIco} alt="searchIco" />
                </button>
              </form>
            </div>
          </div>

          <div className="row">
            {!!searchFilms.searchFilmsList.length &&
              searchFilms.searchFilmsList.map((item, i) => (
                <div
                  key={item.code}
                  className="col-lg-2 col-md-4 col-sm-4 col-6 _mb-30">
                  <CardFlat item={item} key={i} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
