import React from "react";
import CatalogGrid from "../components/CatalogGrid";
import HomeFilter from "../components/HomeFilter";
import HomeSlider from "../components/HomeSlider";
import HomeSliderRandom from "../components/HomeSliderRandom";

export const Home = () => {
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
