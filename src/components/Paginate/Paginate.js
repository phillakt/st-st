import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getCategoryCurrent, wScrollTo } from "../../redux/actions";
import style from "./Paginate.module.scss";

export const Paginate = ({ itemsPerPage, slug, filterState, categoryAllCountPosts }) => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [remountComponent, setRemountComponent] = useState(0);

  useEffect(() => {
    setRemountComponent(Math.random());
    setItemOffset(0);
  }, [slug]);

  useEffect(() => {
    setPageCount(Math.ceil(categoryAllCountPosts / itemsPerPage));
  }, [itemOffset, categoryAllCountPosts, slug]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categoryAllCountPosts;
    setItemOffset(newOffset);
    dispatch(getCategoryCurrent(slug, newOffset, filterState));
    wScrollTo();
  };

  return (
    <div className={`${style.wrap} fjc-sb fai-c`}>
      <div className={style.total}>
        {/* <span className={`${style.text} _pr-10 _pr-10`}>позиция</span> */}
        {/* <span className={`${style.count} _pr-10`}>{itemOffset}</span> */}
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
