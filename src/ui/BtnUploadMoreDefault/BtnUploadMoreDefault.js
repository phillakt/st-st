import React from "react";
import style from "./BtnUploadMoreDefault.module.scss";

const BtnUploadMoreDefault = ({text, increment, categoryCurrent}) => {
  const count = categoryCurrent.count * 2;
  return (
    <div
      onClick={() => increment(categoryCurrent.code, count)}
      className={`${style.btn} ${style.default}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default BtnUploadMoreDefault;
