import React, { useEffect } from "react";
import CatalogGrid from "../components/CatalogGrid/CatalogGrid";
import HomeFilter from "../components/HomeFilter/HomeFilter";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import HomeSliderRandom from "../components/HomeSliderRandom";
import { wScrollTo } from "../redux/actions";

export const Home = () => {

  useEffect(() => {
    wScrollTo();
  }, []);

  return (
    <>
      <HomeSlider />
      <HomeFilter />
      <CatalogGrid />
      <HomeSliderRandom />
    </>
  );
};

export default Home;
