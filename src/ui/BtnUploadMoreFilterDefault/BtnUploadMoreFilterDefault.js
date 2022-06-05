import React from "react";
import style from "./BtnUploadMoreFilterDefault.module.scss";

const BtnUploadMoreFilterDefault = (props) => {
  const text = props.text;
  const increment = props.increment;
  const categoryCurrent = props.categoryCurrent;
  const filterState = props.filterState;
  const count = categoryCurrent.count + 1;
  return (
    <div
      onClick={() => increment(categoryCurrent.slug, count, filterState)}
      className={`${style.btn} ${style.default}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default BtnUploadMoreFilterDefault;
