import React from "react";
import style from "./BtnResetFilter.module.scss";
import { getCategoryCurrent, resetCurrentFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const BtnResetFilter = (props) => {
    const dispatch = useDispatch();
    const categoryCurrent = useSelector((selector) => (selector.films.categoryCurrent));

    return (
        <div
            onClick={() => {
                dispatch(resetCurrentFilter());
                dispatch(getCategoryCurrent(categoryCurrent.slug, 0, []));
                // dispatch(getCategoryCurrent(categoryCurrent.slug, 0, []));
            }}
            className={`${style.btn} ${style.default}`}>
            <span>{props.children}</span>
        </div>
    );
}

export default BtnResetFilter;