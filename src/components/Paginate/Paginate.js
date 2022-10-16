import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCurrent, getAllFilmsLength, wScrollTo } from "../../redux/actions";
import style from "./Paginate.module.scss";

export const Paginate = ({ itemsPerPage, slug, filterState, categoryAllCountPosts }) => {
  const dispatch = useDispatch();
  const params = useParams();

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
      <div className="pagination__total">
        <span className="pagination__text _pr-10 _pr-10">позиция</span>
        <span className="pagination__count">{itemOffset}</span>
        <span className="pagination__text _pl-10 _pr-10">всего</span>
        <span className="pagination__sum">{categoryAllCountPosts}</span>
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
