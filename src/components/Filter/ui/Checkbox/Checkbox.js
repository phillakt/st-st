import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  changeCheckedElCurrentFilter,
  getCategoryCurrent,
} from "../../../../redux/actions";
import style from "./Checkbox.module.scss";

const Checkbox = ({ item }) => {
  const checkboxList = item.list;
  const dispatch = useDispatch();
  const filterState = useSelector((selector) => selector.films.filtersProps);
  const categoryCurrent = useSelector((selector) => selector.films.categoryCurrent);

  const navigate = useNavigate();
  const location = useLocation();
  const queryCatCurrent = new URLSearchParams(location.search);

  // Offset списка для пагинации
  const currentPageCatCurrent = parseInt(queryCatCurrent.get('pagination')) || 1;
  const currentPageCatCurrentOffset = (currentPageCatCurrent * 10) - 10;
  // Offset списка для пагинации end

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

                let filterArr = [];

                for (const filter of filterState) {
                  if(filter.param === item.param){
                    for (const el of filter.list) {
                      if(el.checked){
                        filterArr.push(el.value);
                      }
                    }
                  }
                }
                
                queryCatCurrent.set(`${item.param}`, filterArr.join('.'));
                queryCatCurrent.set('pagination', 1);

                navigate(`?${queryCatCurrent.toString()}`);

                // dispatch(getCategoryCurrent(categoryCurrent.code, 0, filterState));
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
