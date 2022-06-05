import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCheckedElCurrentFilter,
  getCategoryCurrent,
} from "../../../../redux/actions";
import style from "./Checkbox.module.scss";

const Checkbox = ({ item }) => {
  const checkboxList = item.list;
  const dispatch = useDispatch();
  const filterState = useSelector((selector) => selector.films.filtersProps);
  const categoryCurrent = useSelector(
    (selector) => selector.films.categoryCurrent
  );

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
              onClick={() => {
                dispatch(
                  changeCheckedElCurrentFilter({
                    param: item.param,
                    value: el.value,
                  })
                );

                dispatch(getCategoryCurrent(categoryCurrent.slug, 1, filterState));
              }}
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
