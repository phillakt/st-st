import React from 'react';
import style from './Checkbox.module.scss';


const Checkbox = ({item}) => {
    return (
        <div className={`${style.wrap} _mt-10 _mb-10`}>
            <input type="checkbox" className={style.custom_checkbox} id={item.slug} name={item.slug} />
            <label htmlFor={item.slug} >{item.title}</label>
        </div>
    );
}

export default Checkbox;