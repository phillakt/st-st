import React, {useEffect} from "react";
import { wScrollTo } from "../../redux/actions";


export const Mobile = () => {

  useEffect(() => {
    wScrollTo();
  });

  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="fjc-c color__white fs-30">Как скачать для телефона?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
