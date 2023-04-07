import React, { useEffect } from "react";
import HomeFilter from "../components/HomeFilter/HomeFilter";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import { Helmet } from "react-helmet";

export const Home = () => {

  return (
    <>
      <Helmet>
        <title>{`ST-ST — Скачать торрент на телефон, планшет бесплатно в mp4!`}</title>
        <meta
          name="description"
          content={`Скачать фильмы торрентом бесплатно в хорошем качестве mp4!`}
        />
      </Helmet>
      <HomeSlider />
      <HomeFilter />
    </>
  );
};

export default Home;
