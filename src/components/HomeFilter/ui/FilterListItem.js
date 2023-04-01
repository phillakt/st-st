import React from "react";
import { useDispatch } from "react-redux";
import { getMainFilterCategoryCurrent } from "../../../redux/actions";

export const FilterListItem = ({props}) => {
  const dispatch = useDispatch();
  return (
    <span
      className={props.className}
      onClick={() => {
        dispatch(getMainFilterCategoryCurrent(props.slug, props.count));
      }}
    >
      {props.name}
    </span>
  );
};

export default FilterListItem;
