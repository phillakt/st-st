import React from 'react';
import style from './Checkbox.module.scss';

const Checkbox = ({ item }) => {
    const checkboxList = item.value;
    return (
        <>
            <div>
                <h3 className={style.title}>{item.title}</h3>
            </div>
            {
                checkboxList.map((el, i) => {
                    return (
                        <div className={`${style.wrap} _mt-10 _mb-10`} key={i}>
                            <input type={item.type} className={style.custom_checkbox} id={`${item.slug}_${el.prop}`} name={el.prop} value={el.prop} />
                            <label htmlFor={`${item.slug}_${el.prop}`}
                            >{el.title} {el.prop}</label>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Checkbox;