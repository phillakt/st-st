import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { wScrollTo } from "../../redux/actions";
import manualMobile1 from "../../img/manual/mobile/st-st_manual__mobile-1.webp";
import manualMobile2 from "../../img/manual/mobile/st-st_manual__mobile-2.webp";
import BtnBlue from "../../ui/BtnBlue/BtnBlue";
import style from "../Manual.module.scss";
import backArrow from "../../img/svg/icons/back_arrow.svg";
import { Helmet } from "react-helmet";

export const Mobile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    wScrollTo();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Как скачать для телефон`}</title>
        <meta
          name="description"
          content={`Инструкции по скачиванию фильмов торрентом на телефон`}
        />
      </Helmet>

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
                  to={`${process.env.PUBLIC_URL}/manual/desktop`}
                >
                  <BtnBlue>Для компьютера</BtnBlue>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-12">
              <h1 className="fjc-c color__white fs-30">Для телефона</h1>
            </div>
          </div>
          <div className="row _mt-60">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="fjc-c color__white fs-30">Шаг - 1</h2>
              <div className="fjc-c _mt-30">
                <div className="row">
                  <div className="col-md-10 col-xs-12 offset-md-1">
                    <img
                      className="img-res"
                      src={manualMobile1}
                      alt="manualMobile1"
                    />
                  </div>
                </div>
              </div>
              <div className="fjc-c">
                <div className="tac color__white _mt-30">
                  Для скачивания фильма воспользуйтесь программой
                  <a
                    className={style.link}
                    href="https://play.google.com/store/apps/details?id=com.delphicoder.flud"
                    target="_blank"
                  >
                    Flud
                  </a>
                </div>
              </div>

              <div className="tac color__white _mt-30">
                Нажимаем «Установить»
              </div>

              <h2 className="fjc-c color__white fs-30 _mt-60">Шаг - 2</h2>

              <div className="row">
                <div className="col-md-6 col-xs-12 offset-md-3">
                  <img
                    className="img-res"
                    src={manualMobile2}
                    alt="manualMobile2"
                  />
                </div>
              </div>

              <div className="tac _mt-10 color__white">
                Скачиваем torrent с сайта
              </div>

              <h2 className="fjc-c color__white fs-30 _mt-60">Шаг - 3</h2>

              <div className="tac color__white _mt-30">
                Открываем torrent через программу
                <a
                  className={style.link}
                  href="https://play.google.com/store/apps/details?id=com.delphicoder.flud"
                  target="_blank"
                >
                  Flud
                </a>
              </div>

              <div className="_mt-30 fjc-c fai-e color__white">
                Дожидаемся скачивания фильма
              </div>
              <h2 className="tac color__white fs-30 _mt-30">
                Приятного просмотра :)
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
    </>
  );
};

export default Mobile;
