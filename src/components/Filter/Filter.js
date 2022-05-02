import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import style from './Filter.module.scss';
import { useSelector } from 'react-redux';

const CategoryCurrentFilter = () => {
    const filtersProps = useSelector((selector => selector.films.filtersProps))
    return (
        <div className={style.wrap}>
            {
                !filtersProps ? "Нету параметров" : (
                    filtersProps.map((item, i) => {
                        // console.log(item);
                        return (
                            <div key={i}>
                                <Checkbox item={item} />
                            </div>
                        )
                    })
                )
            }
        </div>
    );
}

export default CategoryCurrentFilter;