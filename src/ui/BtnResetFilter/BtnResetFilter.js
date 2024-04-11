import React from "react";
import style from "./BtnResetFilter.module.scss";
import { getCategoryCurrent, getCategoryCurrentLabelsFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const BtnResetFilter = (props) => {
    const dispatch = useDispatch();
    const categoryCurrent = useSelector((selector) => (selector.films.categoryCurrent));

    return (
        <div
            onClick={() => {
                dispatch(getCategoryCurrentLabelsFilter(categoryCurrent.code));
                dispatch(getCategoryCurrent(categoryCurrent.code, 0, []));
            }}
            className={`${style.btn} ${style.default}`}>
            <span>{props.children}</span>
        </div>
    );
}

export default BtnResetFilter;