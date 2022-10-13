import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCurrent, getAllFilmsLength } from "../../redux/actions";
import style from "./Paginate.module.scss";

export const Paginate = ({ itemsPerPage, slug, filterState }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const allFilmsLength = useSelector(
    (selector) => selector.films.allFilmsLength
  );

  const items = [];
  for (let i = 1; i < allFilmsLength; i++) {
    items.push(i);
  }

  useEffect(() => {
    _getAllFilmsLength(slug);

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allFilmsLength, slug]);

  const _getAllFilmsLength = useCallback((slug) => {
    dispatch(getAllFilmsLength(slug));
  });

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    dispatch(getCategoryCurrent(slug, newOffset, filterState));
  };

  return (
    <div className={`${style.wrap} fjc-sb fai-c`}>
      <div className="pagination__total">
        <span className="pagination__text _pr-10">сдвиг</span>
        <span className="pagination__text _pr-10 _pr-10">на</span>
        <span className="pagination__count">{itemOffset}</span>
        <span className="pagination__text _pl-10 _pr-10">из</span>
        <span className="pagination__sum">{allFilmsLength}</span>
        <span className="pagination__text _pl-10 _pr-10">фильмов</span>
      </div>
      <div className={style.wrap_list}>
        <ReactPaginate
          breakLabel="..."
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
