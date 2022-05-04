import React from 'react';
import style from './Filter.module.scss';
import { useSelector } from 'react-redux';
import ElementFilter from './ElementFilter/ElementFilter';


const CategoryCurrentFilter = () => {
    const filtersProps = useSelector((selector => selector.films.filtersProps))
    return (
        <div className={style.wrap}>
            <div>
                <h2 className={style.title}>Фильтр</h2>
            </div>
            {
                !filtersProps ? "Нету параметров" : (
                    filtersProps.map((item, i) => {
                        return (    
                            <div className={style.wrap__box} key={i}>
                                <ElementFilter item={item} />
                            </div>
                        )
                    })
                )
            }
        </div>
    );
}

export default CategoryCurrentFilter;