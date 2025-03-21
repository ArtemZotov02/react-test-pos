import { FormProps } from "../../types/Auth.types";
import Field from "./Field";
import style from "./style.module.scss";

export default function Form({
  control,
  isReg,
  authPlaceholders,
  authError,
}: FormProps) {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <>
      <Field
        control={control}
        name="username"
        placeholder={authPlaceholders.username}
        className={style.form_input}
        rules={{
          required: authError.login,
          minLength: {
            value: 1,
            message: authError.login,
          },
        }}
      />
      {isReg && (
        <Field
          control={control}
          name="email"
          placeholder={authPlaceholders.email ?? ""}
          className={style.form_input}
          rules={{
            required: authError.email,
            pattern: {
              value: validEmail,
              message: authError.email ?? "",
            },
          }}
        />
      )}
      <Field
        control={control}
        name="password"
        placeholder={authPlaceholders.password}
        className={style.form_input}
        rules={{
          required: authError.pass,
          minLength: {
            value: 1,
            message: authError.pass,
          },
        }}
      />
    </>
  );
}
