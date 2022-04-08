import React from "react";
import "./main.css";
import "./css/custom.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Categories from "./Categories/Categories";
import Category from "./Category/Category";
import Detail from "./Detail/Detail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/detail/:slug" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
