import React from "react";
import manualDesktop1 from "../../img/manual/desktop/st-st_manual__desktop-1.png";
import manualDesktop2 from "../../img/manual/desktop/st-st_manual__desktop-2.png";

export const Desktop = () => {
  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="fjc-c color__white fs-30">
              Для компьютера
            </h1>
          </div>
        </div>
        <div className="row _mt-40">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fjc-c color__white fs-30">Шаг - 1</h2>
            <div className="fjc-c fai-e  color__white _mt-30">
              Для скачивания фильма на нашем сайте воспользуйтесь программой
              <a
                className="df-inline _ml-10 link link_white link_download fs-20"
                href="https://www.qbittorrent.org/"
                target="_blank"
              >
                Qbittorrent
              </a>
            </div>

            <div className="fjc-s color__white _mt-30">
              Нажимаем по ссылке «Download» в меню, переходим на страницу, далее выбираем для вашей
              операционной системы (Windows, MacOS, Linux) дистрибутив и cкачиваем его.
            </div>

            <div className="_mt-30">
              <img
                className="img-res"
                src={manualDesktop1}
                alt="manualDesktop1"
              />
            </div>

            <div className="_mt-30 fjc-s color__white">
              После скачивания файла устаналиваете его на ваш компьютер.
            </div>

            <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 2</h2>

            <div className="_mt-30 fjc-s color__white">
              Выбираем на сайте понравившийся фильм и скачиваем по нажатию
              зеленой кнопки torrent файл.
            </div>

            <div className="_mt-30">
              <img
                className="img-res"
                src={manualDesktop2}
                alt="manualDesktop2"
              />
            </div>

            <h2 className="fjc-c color__white fs-30 _mt-30">Шаг - 3</h2>

            <div className="_mt-30 fjc-s fai-e color__white">
              Открываем torrent файл через установленную программу 
              <a
                className="df-inline _ml-10 link link_white link_download fs-20"
                href="https://www.qbittorrent.org/"
                target="_blank"
              >
                Qbittorrent
              </a>
            </div>

            <div className="_mt-30 fjc-s fai-e color__white">
              В появившемся окне выбираем «Путь сохранения» и жмем «Ок», дожидаемся скачивания фильма.  
            </div>

            <h2 className="fjc-c color__white fs-30 _mt-30">Приятного просмотра!</h2>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Desktop;
