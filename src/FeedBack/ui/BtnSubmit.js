import React from "react";

export const BtnSubmit = ({ props }) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={props.class}
        placeholder={props.placeholder}
        value="Отправить"
      />
    </>
  );
};

export default BtnSubmit;
