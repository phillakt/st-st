import React from 'react';
import style from "./Detail.module.scss";
import PropStyles from "../PropStyles";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Detail = () => {
    const ps = PropStyles();
    const isMobile = window.innerWidth < 992;

    return (
        <SkeletonTheme baseColor="#151f30" highlightColor="#2f80ed">
            <section className="detail _pt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-lg-2">
                            <div className="_mb-20">
                                <Skeleton count={1} style={ps.h(20)} />
                            </div>
                        </div>
                        {window.innerWidth < 992 && (
                            <div className="col-lg-7 offset-lg-5">
                                <div className="_mb-20">
                                    <Skeleton count={1} style={ps.h(40)} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-lg-3 offset-lg-2">
                            <div className={`${style.main__img} _mb-20`}>
                                <Skeleton count={1} style={ps.h(isMobile ? 250 : 400)} />
                            </div>

                            <div className="_mb-20">
                                <Skeleton count={1} style={ps.h(60)} />
                            </div>

                            <div className="_mb-20">
                                <Skeleton count={2} style={ps.h(10)} />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="_mb-20">
                                <Skeleton count={1} style={ps.h(20)} />
                            </div>

                            <div className="_mb-20">
                                <Skeleton count={1} style={ps.h(20)} />
                            </div>

                            <div className="_mb-40">
                                <Skeleton count={3} style={ps.h(10)} />
                            </div>

                            <div className="_mb-40">
                                <Skeleton count={9} style={ps.h(10)} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SkeletonTheme>
    );
}

export default Detail;