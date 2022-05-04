import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheckedElCurrentFilter } from '../../../../redux/actions';
import style from './Checkbox.module.scss';


const Checkbox = ({ item }) => {
    const checkboxList = item.value;
    const dispatch = useDispatch();

    const changeItem = (el) => {
        const element = {
            checked: !el.checked,
            prop: el.prop,
            type: item.type,
        };
        console.log(element);
        dispatch(setCheckedElCurrentFilter(element));
    };

    return (
        <>
            <div>
                <h3 className={style.title}>{item.title}</h3>
            </div>
            {
                checkboxList.map((el, i) => {
                    return (
                        <div className={`${style.wrap} _mt-10 _mb-10`} key={i}>
                            <input type={item.type} className={style.custom_checkbox} id={`${item.slug}_${el.prop}`} />
                            <label htmlFor={`${item.slug}_${el.prop}`}
                                onClick={() => (changeItem(el))}
                            >{el.title} {el.prop}</label>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Checkbox;