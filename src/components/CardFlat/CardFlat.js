import React from 'react';
import style from "./CardFlat.module.scss";
import { NavLink } from "react-router-dom";
import playBtn from "../../img/webp/play-button.webp";
import star from "../../img/webp/star.webp";

const CardFlat = ({ item }) => {
    return (
        <div className={`${style.card} _mr-20`}>
            <div className={`${style.link} fjc-s`} >
                <span className={style.img}
                    style={{ background: `url(${item.thumbnail_url})` }}>

                </span>
                <NavLink
                    to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}
                    className={style.play}
                >
                    <img
                        className="width-50 fa-circle-play"
                        src={playBtn}
                        alt={"play"}
                    />
                    {/* <i className="fa-solid fa-circle-play" /> */}
                </NavLink>
                <span className={style.rating} >
                    <img src={star} alt={"star"} />
                    <span className="_pl-5">
                        {item.meta_fields.rating[0]}
                    </span>
                </span>
            </div>
            <div className={`${style.content} _mt-10`}>
                <div>
                    <div className="_pb-10">
                        <h3 className={style.title} >
                            <NavLink to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}>
                                {item.post_title}
                            </NavLink>
                        </h3>
                    </div>
                    <div className="_mb-5">
                        <div className={style.year} >
                            <span className="_mr-10">
                                {item.meta_fields.duration[0]}
                            </span>
                            <span>{item.meta_fields.year[0]}</span>
                        </div>
                    </div>
                    <div className="_pb-10">
                        <ul className={style.category_list} >
                            {item.category.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <NavLink to={`${process.env.PUBLIC_URL}/category/${item.slug}`}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardFlat;