import React from "react";
import HomeFilter from "../components/HomeFilter/HomeFilter";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import HomeSliderRandom from "../components/HomeSliderRandom/HomeSliderRandom";
import { Helmet } from "react-helmet";

export const Home = () => {

  return (
    <>
      <Helmet>
        <title>{`ST-ST — Скачать фильмы для компьютера!`}</title>
        <meta
          name="description"
          content={`Скачать фильмы торрентом бесплатно в хорошем качестве!`}
        />
      </Helmet>
      <HomeSlider />
      <HomeFilter />
    </>
  );
};

export default Home;
