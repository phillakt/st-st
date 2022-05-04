import React from 'react';
import { NavLink } from "react-router-dom";
import playBtn from "../../img/webp/play-button.webp";
import star from "../../img/webp/star.webp";
import style from "./CardBook.module.scss";

const CardBook = ({ item }) => {
    console.log(item);
    return (
        <div className={`card ${style.card} _mb-30`}>
            <div className={style.link}>
                <span className={style.img} style={{"background": `url(${item.thumbnail_url})`}}>
                    {/* <img
                        src={item.thumbnail_url}
                        className="img-res"
                        alt={item.post_title}
                    /> */}
                </span>
                <NavLink
                    to={`/detail/${item.post_name}`}
                    // className="card__play"
                    className={style.play}
                >
                    <img src={playBtn} alt="playBtn" />
                </NavLink>
                <span className="card__rating">
                    <img src={star} alt="star" />
                    <span className="_pl-5">{item.meta_fields.rating}</span>
                </span>
            </div>
            <div className="flex__55 card__content">
                <div>
                    <div className="_pb-10">
                        <h3 className={style.title}>
                            <NavLink to={`/detail/${item.post_name}`}>
                                {item.post_title}
                            </NavLink>
                        </h3>
                    </div>
                    {!item.meta_fields.director ? (
                        ""
                    ) : (
                        <div className="_pb-10">
                            <div className="card__director">
                                <span>Режисер: {item.meta_fields.director}</span>
                            </div>
                        </div>
                    )}
                    <div className="_pb-10">
                        <ul className={style.category_list}>
                            {item.category.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <NavLink to={`/category/${item.slug}`}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                {!item.meta_fields.slogan ? (
                        ""
                    ) : (
                        <div className="_pb-10">
                            <div className="card__slogan">
                                <span>{item.meta_fields.slogan}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardBook;