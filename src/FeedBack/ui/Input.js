import React from "react";

export const Input = ({ props, register, errors }) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={props.class}
        placeholder={props.placeholder}
        {...register(props.name, {
          required: true,
          minLength: props?.minLength,
          maxLength: props?.maxLength,
          pattern: props?.pattern,
        })}
      />
      {errors[props.name] && (
        <span className={props.error}>
          Заполните поле &#171;{props.placeholder}&#187;
        </span>
      )}
    </>
  );
};

export default Input;
