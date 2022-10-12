import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCurrent, getAllFilmsLength } from "../../redux/actions";

export const Paginate = ({ itemsPerPage, slug, filterState }) => {

  const dispatch = useDispatch();
  const params = useParams();

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const allFilmsLength = useSelector((selector) => selector.films.allFilmsLength);

  const items = [];
  for (let i = 1; i < allFilmsLength; i++) {items.push(i)}

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
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        hrefAllControls={true}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
