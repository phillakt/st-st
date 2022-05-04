import React from "react";
import { useDispatch } from "react-redux";
import { changeCheckedElCurrentFilter } from "../../../../redux/actions";
import style from "./Radio.module.scss";

const Radio = ({ item }) => {
  const radioList = item.list;
  const dispatch = useDispatch();

  return (
    <>
      <h3 className={style.title}>{item.title}</h3>
      {radioList.map((el, i) => {
        return (
          <div className={`${style.wrap} _mt-10 _mb-10`} key={i}>
            <input
              type={item.type}
              className={style.custom_radio}
              id={`${item.param}_${el.value}`}
              name={`${item.param}`}
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
              {el.title} {el.text}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Radio;
