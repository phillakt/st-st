import React from 'react';
import { NavLink } from "react-router-dom";
import playBtn from "../../img/webp/play-button.webp";
import star from "../../img/png/star.png";
import style from "./CardBook.module.scss";
import torrentFile from "../../img/png/get-torrent-file.png";

const CardBook = ({ item }) => {
    return (
        <div className={`${style.card} _mb-30`}>
            <div className={style.link}>
                <span className={style.img} style={{"background": `url(${item.thumbnail_url})`}}>
                </span>
                <NavLink
                    to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}
                    className={style.play}
                >
                    <img src={torrentFile} alt="torrentFile" />
                </NavLink>
                <span className={style.rating} >
                    <img src={star} alt="star" />
                    <span className="_pl-5">{item.meta_fields.rating}</span>
                </span>
            </div>
            <div className={`${style.content} flex__55`}>
                <div>
                    <div className="_pb-10">
                        <h3 className={style.title}>
                            <NavLink to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`}>
                                {item.post_title}
                            </NavLink>
                        </h3>
                    </div>
                    {!item.meta_fields.director ? (
                        ""
                    ) : (
                        <div className="_pb-10">
                            <div className={style.director}>
                                <span>Режисер: {item.meta_fields.director}</span>
                            </div>
                        </div>
                    )}
                    <div className="_pb-10">
                        <ul className={style.category_list}>
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