import React from "react";
import { useDispatch } from "react-redux";
import { getMainFilterCategoryCurrent, resetMainFilterCategoryCurrent } from "../../../redux/actions";

export const FilterListItem = ({props}) => {
  const dispatch = useDispatch();
  return (
    <span
      className={props.className}
      onClick={() => {
        dispatch(resetMainFilterCategoryCurrent());
        dispatch(getMainFilterCategoryCurrent(props.code, props.count));
      }}
    >
      {props.name}
    </span>
  );
};

export default FilterListItem;
