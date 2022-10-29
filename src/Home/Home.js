import React, { useEffect } from "react";
import CatalogGrid from "../components/CatalogGrid/CatalogGrid";
import HomeFilter from "../components/HomeFilter/HomeFilter";
import HomeSlider from "../components/HomeSlider/HomeSlider";
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
    </>
  );
};

export default Home;
