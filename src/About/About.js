import React, { useEffect } from "react";
import { wScrollTo } from "../redux/actions";

export const About = () => {

  useEffect(() => {
    wScrollTo();
  }, [])

  return (
    <section className="_mt-80 _pt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="color__white fs-26">О нас</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
