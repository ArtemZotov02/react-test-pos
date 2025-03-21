import { useState } from "react";
import { useForm, Control } from "react-hook-form";
import style from "./style.module.scss";
import Form from "../form/Form";
import { useTranslation } from "react-i18next";
import {  IAuth, SubmitData, AuthProps } from "../../types/Auth.types.js";
import { useAuth } from "../../hooks/useAuth.js";

export default function Auth({onLoginSuccess}: AuthProps) {
  const { handleSubmit, control, reset } = useForm<SubmitData>({
    mode: "onSubmit",
  });
  const [isReg, setIsReg] = useState(false);
  const [activMethod, setActiveMethod] = useState(0);
  const { t } = useTranslation();
  const { login, register, error, setError } = useAuth();
  const auth:IAuth = t("auth", { returnObjects: true })  as IAuth;

  const onSubmit = async (data:SubmitData) => {
    if (!isReg) {
      await login(data);
    } else {
      await register(data);
    }

    const user = localStorage.getItem('user');
    if (user) {
      onLoginSuccess(JSON.parse(user));
    }
  };

  const changeAuthMethods = (index: number) => {
    if (activMethod !== index) {
      setIsReg(!isReg);
      reset();
      setError("");
      setActiveMethod(index);
    }
  };

  return (
    <div className={style.form}>
      <div className={style.form_loginMethods}>
        {auth.authMethods.map((item, index) => (
          <button
            className={activMethod === index ? style.active : ""}
            onClick={() => changeAuthMethods(index)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <Form isReg={isReg} control={control as Control<SubmitData>} authPlaceholders={auth.authPlaceholders} authError={auth.authError.fields}/>
      <p className={style.error}>{error}</p>
      <button onClick={handleSubmit(onSubmit)} className={style.form_btn}>
        {isReg ? `${auth.authBtns.registration}` : `${auth.authBtns.login}`}
      </button>
    </div>
  );
}
