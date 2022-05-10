import React from "react";
import "./main.css";
import "./css/custom.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Categorys from "./Categorys/Categorys";
import CategoryCurrent from "./CategoryCurrent/CategoryCurrent";
import Detail from "./Detail/Detail";

const App = () => {
  return (
    <>
      <Header />
      <Routes basename={'/st'}>
        <Route path={`${process.env.PUBLIC_URL}/`} exact element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/categorys`} element={<Categorys />} />
        <Route path={`${process.env.PUBLIC_URL}/category/:slug`} element={<CategoryCurrent />} />
        <Route path={`${process.env.PUBLIC_URL}/detail/:slug`} element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
