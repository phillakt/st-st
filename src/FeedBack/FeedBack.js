import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { wScrollTo } from "../redux/actions";
import style from "./FeedBack.module.scss";

import Input from "./ui/Input";
import Textarea from "./ui/Texarea";
import BtnSubmit from "./ui/BtnSubmit";

export const FeedBack = () => {
  const emailPatternValidate =
    /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;

  useEffect(() => {
    wScrollTo();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="_pt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="color__white fs-26">Контакты</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7 col-xl-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${style.form} ${style.form__contacts}`}
            >
              <div className="row">
                <div className="col-12 col-xl-6">
                  <div className={style.group}>
                    <Input
                      props={{
                        type: "text",
                        name: "name",
                        class: style.input,
                        error: style.error,
                        placeholder: "Имя",
                        minLength: 2,
                      }}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="col-12 col-xl-6">
                  <div className={style.group}>
                    <Input
                      props={{
                        type: "text",
                        name: "email",
                        class: style.input,
                        error: style.error,
                        placeholder: "Email",
                        pattern: emailPatternValidate,
                      }}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className={style.group}>
                    <Input
                      props={{
                        type: "text",
                        name: "subject",
                        class: style.input,
                        error: style.error,
                        placeholder: "Тема",
                      }}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className={style.group}>
                    <Textarea
                      props={{
                        type: "textarea",
                        name: "text",
                        class: style.textarea,
                        error: style.error,
                        placeholder: "Сообщение",
                      }}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className="col-12 col-xl-3">
                  <BtnSubmit
                    props={{
                      type: "submit",
                      name: "submit",
                      class: style.btnSubmit,
                      error: style.error,
                      placeholder: "Тема",
                    }}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-5 col-xl-4">
            <div className="_mt-30">
              <div>
                <h2 className="color__white fs-26">Инфо</h2>
              </div>
              <div className="_mt-30">
                <div className="fjc-s">
                  <span className="color__white fs-18">
                    По вопросам сотрудничества <br /> или размещения рекламы
                    <br />
                    пишите на почту:
                  </span>
                </div>
                <div className="_mt-10">
                  <div className="fjc-s">
                    <a className={style.link} href="mailto:support@st-st.com">support@st-st.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
