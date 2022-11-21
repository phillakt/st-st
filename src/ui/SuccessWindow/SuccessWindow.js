import React from "react";
import style from "./SuccessWindow.module.scss";

const SuccessWindow = ({ props, close }) => {
  return (
    <div
      id="success-window"
      className={style.modal}
      onClick={e => e.target.id && close(!props.success)}
    >
      <div className={style.modal_content}>
        <span className={style.close}>×</span>
        <div className={style.modal_wrap}>
          <div className={style.box_icon}>
            <div className={style.icon_border}>
              <div className={style.icon_checkbox}></div>
            </div>
          </div>
          <div className={style.text}>{props.statusText}</div>
        </div>
      </div>
    </div>
  );
};

export default SuccessWindow;
