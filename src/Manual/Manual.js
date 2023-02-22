import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { wScrollTo } from "../redux/actions";
import BtnBlue from "../ui/BtnBlue/BtnBlue";
import { Helmet } from "react-helmet";
export const Manual = () => {
  useEffect(() => {
    wScrollTo();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`ST-ST — Как скачать для телефона или компьютера`}</title>
        <meta
          name="description"
          content={`Инструкции по скачиванию фильмов торрентом на телефон, планшет или компьютер`}
        />
      </Helmet>
      <section className="_pt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="tac _mb-30 color__white fs-30">
                Инструкции по скачиванию
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 offset-lg-3">
              <NavLink
                className="d-block purge-link _mt-30 _mb-30"
                to={`/manual/mobile`}
              >
                <BtnBlue>Для телефона</BtnBlue>
              </NavLink>
            </div>
            <div className="col-lg-3">
              <NavLink
                className="d-block purge-link _mt-30 _mb-30"
                to={`/manual/desktop`}
              >
                <BtnBlue>Для компьютера</BtnBlue>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manual;
