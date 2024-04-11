import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getCategoryCurrent, wScrollTo } from "../../redux/actions";
import style from "./Paginate.module.scss";

export const Paginate = ({ itemsPerPage, code, filterState, categoryAllCountPosts }) => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(0);
  const [remountComponent, setRemountComponent] = useState(0);

  useEffect(() => {
    setRemountComponent(Math.random());
    setPageCount(Math.ceil(categoryAllCountPosts / itemsPerPage));
  }, [categoryAllCountPosts, code, filterState]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categoryAllCountPosts;
    dispatch(getCategoryCurrent(code, newOffset, filterState));
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
          renderOnZeroPageCount={null}
          className={style.list}
          previousLabel={<span className={style.btn_prev}></span>}
          nextLabel={<span className={style.btn_next}></span>}
        />
      </div>
    </div>
  );
};

export default Paginate;
