import React from "react";
import style from "./BtnBlue.module.scss";

export const BtnBlue = (props) => {
  return (
    <div className={`${style.btn} ${style.default}`}>
      <span>{props.children}</span>
    </div>
  );
};

export default BtnBlue;
