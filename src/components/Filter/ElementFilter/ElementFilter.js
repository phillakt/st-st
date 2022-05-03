import React from 'react';
import Checkbox from '../ui/Checkbox/Checkbox';
import Radio from '../ui/Radio/Radio';
import style from "./ElementFilter.module.scss";


const ElementFilter = ({ item }) => {

    const TypeComponent = ({el}) => {
        if (el.type === 'checkbox') {
            return (<Checkbox item={el} />)
        } else if (el.type === 'radio') {
            return (<Radio item={el} />)
        } else {
            return (<div>Is not type components.</div>)
        }
    }

    return (
        <TypeComponent el={item} />
    );
}

export default ElementFilter;