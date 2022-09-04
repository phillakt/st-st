import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { wScrollTo } from "../redux/actions";
import BtnBlue from "../ui/BtnBlue/BtnBlue";


export const Manual = () => {

  useEffect(() => {
    wScrollTo();
  });

  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="fjc-c color__white fs-30">Как скачать?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 offset-lg-3">
            <NavLink
              className="d-block purge-link _mt-30 _mb-30"
              to={`${process.env.PUBLIC_URL}/manual/desktop`}
            >
              <BtnBlue>Для компьютера</BtnBlue>
            </NavLink>
          </div>
          <div className="col-lg-3">
            <NavLink
              className="d-block purge-link _mt-30 _mb-30"
              to={`${process.env.PUBLIC_URL}/manual/mobile`}
            >
              <BtnBlue>Для телефона</BtnBlue>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manual;
