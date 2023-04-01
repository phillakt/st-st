import React, { useEffect } from "react";
import CatalogGrid from "../components/CatalogGrid/CatalogGrid";
import HomeFilter from "../components/HomeFilter/HomeFilter";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

export const Home = () => {
  // const dispatch = useDispatch();

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
      {/* <CatalogGrid /> */}
    </>
  );
};

export default Home;
