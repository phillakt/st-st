import React from "react";
import { useDispatch } from "react-redux";
import { changeCheckedElCurrentFilter } from "../../../../redux/actions";
import style from "./Checkbox.module.scss";

const Checkbox = ({ item }) => {
  const checkboxList = item.list;
  const dispatch = useDispatch();
  return (
    <>
      <h3 className={style.title}>{item.title}</h3>
      {checkboxList.map((el, i) => {
        return (
          <div className={`${style.wrap} _mt-10 _mb-10`} key={i}>
            <input
              type={item.type}
              className={style.custom_checkbox}
              id={`${item.param}_${el.value}`}
              name={`${item.param}_${el.value}`}
              defaultChecked={el.checked}
            />
            <label
              htmlFor={`${item.param}_${el.value}`}
              onClick={() =>
                dispatch(
                  changeCheckedElCurrentFilter({
                    param: item.param,
                    value: el.value,
                  })
                )
              }
            >
              {el.text} {el.value}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Checkbox;
