import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import style from "./Manual.module.scss";
import { getManualDesktop } from "../../redux/actions";
import { Helmet } from "react-helmet";
import Loader from "../../ui/Loader/Loader";

export const Desktop = () => {

  const params = useParams();
  const manualDesktop = useSelector((selector) => selector.pages.manualDesktop);
  const dispatch = useDispatch();

  const _getManualDesktop = useCallback(() => {
    dispatch(getManualDesktop(params.code));
  }, []);

  useEffect(() => {
    _getManualDesktop();
  }, [params.code]);


  function createMarkup(param) {
    return { __html: param };
  }

  return (
    <>
      {
        !manualDesktop.ID ? (
          <Loader />
        ) : (
          <>
            <Helmet>
              <title>{`ST-ST — Как скачать для компьютера`}</title>
              <meta
                name="description"
                content={`Инструкция для скачивания фильмов торрентом на компьютер`}
              />
            </Helmet>

            <section className="_pt-30">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="fjc-c color__white fs-30">Для компьютера</h1>
                  </div>
                </div>
                <div className="row _mt-40">
                  <div className="col-lg-8 offset-lg-2"
                    dangerouslySetInnerHTML={createMarkup(manualDesktop.post_content)}>

                    {/* <h2 className="fjc-c color__white fs-30">Шаг - 1</h2>
  
                    <div className="_mt-30">
                      <img
                        className="img-res"
                        src={manualDesktop1}
                        alt="manualDesktop1"
                      />
                    </div>
  
                    <div className="tac color__white _mt-30">
                      Для скачивания фильма воспользуйтесь программой
                      <a
                        className={style.link}
                        href="https://www.qbittorrent.org/"
                        target="_blank"
                      >
                        Qbittorrent
                      </a>
                    </div>
  
                    <div className="tac color__white _mt-30">
                      Нажимаем по ссылке «Download» в меню, переходим на страницу,
                      далее выбираем для вашей операционной системы (Windows, MacOS,
                      Linux) дистрибутив и cкачиваем его
                    </div>
  
                    <div className="tac _mt-30 color__white">
                      После скачивания файла устаналиваете его на ваш компьютер
                    </div>
  
                    <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 2</h2>
  
                    <div className="_mt-30">
                      <img
                        className="img-res"
                        src={manualDesktop2}
                        alt="manualDesktop2"
                      />
                    </div>
  
                    <div className="tac _mt-30 color__white">
                      Скачиваем torrent с сайта
                    </div>
  
                    <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 3</h2>
  
                    <div className="tac _mt-30 color__white">
                      Открываем torrent через установленную программу
                      <a
                        className={style.link}
                        href="https://www.qbittorrent.org/"
                        target="_blank"
                      >
                        Qbittorrent
                      </a>
                    </div>
  
                    <div className="tac _mt-30 color__white">
                      В окне выбираем «Путь сохранения» и жмем «Ок», дожидаемся
                      скачивания фильма
                    </div>
  
                    <h2 className="tac color__white fs-30 _mt-30">
                      Приятного просмотра :)
                    </h2> */}

                  </div>
                </div>
              </div>
            </section>
          </>
        )
      }
    </>
  );
};

export default Desktop;
