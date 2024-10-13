import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { useNavigate, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getCategoryCurrent, wScrollTo } from "../../redux/actions";
import style from "./Paginate.module.scss";

export const Paginate = ({ itemsPerPage, code, filterState, categoryAllCountPosts, currentPagination }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [pageCount, setPageCount] = useState(0);
  const [remountComponent, setRemountComponent] = useState(0);

  // Получение текущей страницы из URL
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    setRemountComponent(Math.random());
    setPageCount(Math.ceil(categoryAllCountPosts / itemsPerPage));
  }, [categoryAllCountPosts, code, filterState]);

  const handlePageClick = (event) => {
    // const newOffset = (event.selected * itemsPerPage) % categoryAllCountPosts;
    // dispatch(getCategoryCurrent(code, newOffset, filterState));

    const selectedPage = event.selected + 1;
    query.set('pagination', selectedPage);
    navigate(`?${query.toString()}`);

    wScrollTo();
  };

  return (
    <div className={`${style.wrap} fjc-sb fai-c`}>
      <div className={style.total}>
        <span className={`${style.text} _pr-10 _pr-10`}>Всего</span>
        <span className={`${style.sum}`}>{categoryAllCountPosts}</span>
      </div>
      <div className={style.wrap_list} key={remountComponent}>
        <ReactPaginate
          onPageChange={handlePageClick}
          pageCount={pageCount}
          hrefAllControls={true}
          pageRangeDisplayed={7}
          renderOnZeroPageCount={null}
          className={style.list}
          forcePage={ currentPagination ? currentPagination - 1 : 0}
          previousLabel={<span className={style.btn_prev}></span>}
          nextLabel={<span className={style.btn_next}></span>}
        />
      </div>
    </div>
  );
};

export default Paginate;
