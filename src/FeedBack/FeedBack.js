import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import BtnSendlerDefault from "../ui/BtnSendlerDefault/BtnSendlerDefault";

import style from "./FeedBack.module.scss";

export const FeedBack = () => {
  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="color__white fs-26">
                Контакты
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7 col-xl-8">
            <form className={`${style.form} ${style.form__contacts}`}>
              <div className="row">
                <div className="col-12 col-xl-6">
                  <div className={style.group}>
                    <input
                      type="text"
                      name="name"
                      className={style.input}
                      placeholder="Имя"
                    />
                  </div>
                </div>
                <div className="col-12 col-xl-6">
                  <div className={style.group}>
                    <input
                      type="text"
                      name="email"
                      className={style.input}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className={style.group}>
                    <input
                      type="text"
                      name="subject"
                      className={style.input}
                      placeholder="Тема"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className={style.group}>
                    <textarea
                      name="text"
                      className={style.textarea}
                      placeholder="Сообщение"
                    />
                  </div>
                </div>
                <div className="col-12 col-xl-3">
                  <BtnSendlerDefault>Отправить</BtnSendlerDefault>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
