import React, { useEffect, useState } from "react";
import "./main.css";
import "./css/custom.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import Search from "./Search/Search";
import Page404 from "./Page404/Page404";
import { wScrollTo, getFilmDetail, getCategoryCurrent } from "./redux/actions";


const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loc, setLoc] = useState(location);

  useEffect(() => {
    wScrollTo();
    if(location.pathname !== loc.pathname){
      dispatch(getFilmDetail(null));
      dispatch(getCategoryCurrent(null));
      setLoc(location);
    }
  }, [location.key]);

  return (
    <>
      <Header />
        <Routes>
          <Route path={`/`} exact element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/cat`} element={<Cat />} />
          <Route path={`/cat/:slug`} element={<CatCurrent />} />
          <Route path={`/cat/:cat/:slug`} element={<Detail />} />
          <Route path={`/feedback`} element={<FeedBack />} />
          <Route path={`/manual`} element={<Manual />} />
          <Route path={`/manual/desktop`} element={<Desktop />}/>
          <Route path={`/search`} match={true} element={<Search />} />
          <Route path={`/*`} element={<Page404 />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;



