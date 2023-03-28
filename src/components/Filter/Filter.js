import React, { useState } from "react";
import style from "./Filter.module.scss";
import { useSelector } from "react-redux";
import ElementFilter from "./ElementFilter/ElementFilter";
import BtnResetFilter from "../../ui/BtnResetFilter/BtnResetFilter";

const CategoryCurrentFilter = () => {
  const filtersProps = useSelector((selector) => selector.films.filtersProps);
  const [stateViewBtnResetFilter, setStateViewBtnResetFilter] = useState(false);
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>Фильтр</h2>
      {filtersProps.map((item, i) => {
        return (
          <div className={style.wrap__box} key={i}>
            <ElementFilter item={item} />
          </div>
        );
      })}

      <div className="_mt-30">
        <BtnResetFilter>Сбросить</BtnResetFilter>
      </div>
    </div>
  );
};

export default CategoryCurrentFilter;
