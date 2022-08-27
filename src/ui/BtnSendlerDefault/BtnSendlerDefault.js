import React from "react";
import style from "./BtnSendlerDefault.module.scss";

export const BtnSendlerDefault = (props) => {
  return (
    <div className={`${style.btn} ${style.default}`}>
      <span>{props.children}</span>
    </div>
  );
};

export default BtnSendlerDefault;
