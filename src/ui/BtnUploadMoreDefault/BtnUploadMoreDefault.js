import React from "react";
import style from "./BtnUploadMoreDefault.module.scss";

const BtnUploadMoreDefault = (props) => {
  const text = props.text;
  const increment = props.increment;
  const categoryCurrent = props.categoryCurrent;
  return (
    <div
      onClick={() => increment(categoryCurrent)}
      className={`${style.btn} ${style.default}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default BtnUploadMoreDefault;
