import React from "react";
import { useDispatch } from "react-redux";

export const FilterListItem = ({
  props,
  getMainFilterCategoryCurrentHandler,
}) => {
  const dispatch = useDispatch();
  return (
    <span
      className={props.className}
      onClick={(e) => {
        e.preventDefault();
        dispatch(getMainFilterCategoryCurrentHandler());
      }}
    >
      {props.name}
    </span>
  );
};

export default FilterListItem;
