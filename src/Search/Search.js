import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import style from "./Search.module.scss";
import { getAllFilms, getSearchFilmsPage } from "../redux/actions";
import Loader from "../ui/Loader/Loader";
import CardFlat from "../components/CardFlat/CardFlat";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allFilms = useSelector((selector) => selector.films.allFilms);
  const searchFilmsPage = useSelector(
    (selector) => selector.films.searchFilmsPage
  );
  const location = useLocation();
  const inputRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    !!allFilms && dispatch(getAllFilms());
    const paramRequest = searchParams.get("q");
    getSearchFilmsPageHandler(paramRequest);

    document.querySelector("input[name=q]").blur();
  }, [location.search, allFilms.length]);

  const getSearchFilmsPageHandler = (val) => {
    if (val) {
      const searchList = allFilms.filter((item, i) => {
        const title = item.post_title.toLowerCase();
        const value = val.toLowerCase();
        if (title.includes(value)) {
          return item;
        }
      });
      dispatch(getSearchFilmsPage(val, searchList));
    } else {
      dispatch(getSearchFilmsPage("", []));
    }
  };

  return (
    <>
      <Helmet>
        <title>{`ST-ST — Поиск`}</title>
        <meta name="description" content={`Поиск по названию фильмов`} />
      </Helmet>

      <section className="_pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className={style.title}>Поиск по названию</h1>
            </div>
            <div className="col-lg-12">
              <div className={`${style.title_search} _mt-30`}>
                Вы искали: «{searchFilmsPage.searchFilmsPageInputValue}»
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${style.title_found} _mt-5`}>
                Найдено: «{searchFilmsPage.searchFilmsPageList.length}»
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
                  inputRef.current.blur();
                  navigate(
                    `${process.env.PUBLIC_URL}/search/?q=${searchFilmsPage.searchFilmsPageInputValue}`
                  );
                }}
              >
                {!allFilms.length ? (
                  <Loader />
                ) : (
                  <input
                    ref={inputRef}
                    className={style.search_input}
                    type="text"
                    placeholder="Введите название фильма..."
                    onChange={(e) => {
                      const val = e.target.value;
                      getSearchFilmsPageHandler(val);
                    }}
                  />
                )}
              </form>
            </div>
          </div>

          <div className="row">
            {searchFilmsPage.searchFilmsPageList &&
              searchFilmsPage.searchFilmsPageList.map((item, i) => (
                <div
                  key={item.ID}
                  className="col-lg-2 col-md-4 col-sm-4 col-6 _mb-30"
                >
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
