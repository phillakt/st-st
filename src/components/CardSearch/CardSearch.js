import React from "react";
import { NavLink } from "react-router-dom";

import style from "./CardSearch.module.scss";

const CardSearch = ({item}) => {

    console.log("CardSearch: ", item);

    return ( 
        <div className={style.wrap}>
            
            <NavLink to={`${process.env.PUBLIC_URL}/detail/${item.post_name}`} className={style.mainLink}></NavLink>

            <div className={style.mainContainer}>
                <div className={style.imgContainer} style={{
                        background: `url(${item.thumbnail_url})`
                    }}>

                </div>
                <div className={style.wrap_info}>
                    <div className={style.info}>

                        <h4 className={style.title}>
                            {item.post_title}
                        </h4>

                        <div className={style.subtitleLine}>
                            <div className={style.rating}>
                                {item.meta_fields.rating[0]}
                            </div>
                            <div className={style.subtitle}>
                                <span className={style.yearRange}>
                                    {item.meta_fields.year[0]}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardSearch;