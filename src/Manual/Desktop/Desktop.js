import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { wScrollTo } from "../../redux/actions";
import manualDesktop1 from "../../img/manual/desktop/st-st_manual__desktop-1.png";
import manualDesktop2 from "../../img/manual/desktop/st-st_manual__desktop-2.png";
import BtnBlue from "../../ui/BtnBlue/BtnBlue";
import style from "../Manual.module.scss";
import backArrow from "../../img/svg/icons/back_arrow.svg";

export const Desktop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    wScrollTo();
  });

  return (
    <section className="_pt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="fjc-c _mb-30">
              <span className={style.backArrow} onClick={() => navigate(-1)}>
                <img src={backArrow} alt="back arrow" />
              </span>
            </div>
            <div className="fjc-c">
              <NavLink
                className="d-block purge-link _mb-30"
                to={`${process.env.PUBLIC_URL}/manual/mobile`}
              >
                <BtnBlue>Для телефона</BtnBlue>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-12">
            <h1 className="fjc-c color__white fs-30">Для компьютера</h1>
          </div>
        </div>
        <div className="row _mt-40">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fjc-c color__white fs-30">Шаг - 1</h2>

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
              Нажимаем по ссылке «Download» в меню, переходим на страницу, далее
              выбираем для вашей операционной системы (Windows, MacOS, Linux)
              дистрибутив и cкачиваем его
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
              Скачиваем torrent файл с раширением .avi
            </div>

            <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 3</h2>

            <div className="tac _mt-30 color__white">
              Открываем torrent файл через установленную программу
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

            <h2 className="fjc-c color__white fs-30 _mt-30">
              Приятного просмотра!
            </h2>

            <div className="fjc-c _mt-30">
              <span className={style.backArrow} onClick={() => navigate(-1)}>
                <img src={backArrow} alt="back arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
