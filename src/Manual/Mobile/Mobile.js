import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { wScrollTo } from "../../redux/actions";
import manualMobile1 from "../../img/manual/mobile/st-st_manual__mobile-1.webp";
import manualMobile2 from "../../img/manual/desktop/st-st_manual__desktop-2.png";
import BtnBlue from "../../ui/BtnBlue/BtnBlue";
import style from "../Manual.module.scss";

export const Mobile = () => {
  useEffect(() => {
    wScrollTo();
  }, []);

  return (
    <section className="_pt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
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
        <div className="row _mt-40">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fjc-c color__white fs-30">Шаг - 1</h2>
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

            <div className="fjc-c _mt-30">
              <div className="row">
                <div className="col-md-4 col-md-12 col-xs-12">
                  <img
                    className="img-res"
                    src={manualMobile1}
                    alt="manualMobile1"
                  />
                </div>
              </div>
            </div>

            <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 2</h2>

            <div className="tac _mt-30 color__white">Скачиваем torrent файл с раширением .mp4</div>

            <div className="_mt-30">
              <img
                className="img-res"
                src={manualMobile2}
                alt="manualMobile2"
              />
            </div>

            <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 3</h2>

            <div className="tac color__white _mt-30">
              Открываем torrent файл через программу
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
            <h2 className="fjc-c color__white fs-30 _mt-30">
              Приятного просмотра!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
