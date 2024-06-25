import React from "react";
import style from "./SearchStub.module.scss";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SearchStub = () => {

    return (
        <SkeletonTheme baseColor="#151f30" highlightColor="#2f80ed">
            <Skeleton count={1} className={style.stub__span} />
            <span className={style.stub__expectation}>Ожидайте, идет загрузка данных...</span>
        </SkeletonTheme>
    );
}
export default SearchStub;