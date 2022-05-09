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
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/category/:slug" element={<CategoryCurrent />} />
        <Route path="/detail/:slug" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
