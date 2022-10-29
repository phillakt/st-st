import React from "react";
import "./main.css";
import "./css/custom.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Cat from "./Cat/Cat";
import CatCurrent from "./CatCurrent/CatCurrent";
import Detail from "./Detail/Detail";
import Manual from "./Manual/Manual";
import FeedBack from "./FeedBack/FeedBack";
import Desktop from "./Manual/Desktop/Desktop";
import Mobile from "./Manual/Mobile/Mobile";
import Page404 from "./Page404/Page404";

const App = () => {
  
  return (
    <>
      <Header />
      <Routes basename={'/st'}>
        <Route path={`${process.env.PUBLIC_URL}/`} exact element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/cat`} element={<Cat />} />
        <Route path={`${process.env.PUBLIC_URL}/cat/:slug`} element={<CatCurrent />} />
        <Route path={`${process.env.PUBLIC_URL}/detail/:slug`} element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/feedback`} element={<FeedBack />} />
        <Route path={`${process.env.PUBLIC_URL}/manual`} element={<Manual />} />
        <Route path={`${process.env.PUBLIC_URL}/manual/desktop`} element={<Desktop />}/>
        <Route path={`${process.env.PUBLIC_URL}/manual/mobile`} element={<Mobile />} />
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
