import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

import { Path } from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  placeholder: string;
  className?: string;
}

export default function Field<T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  className,
}: FieldProps<T>) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules as RegisterOptions<T, Path<T>>}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <>
            <input
              placeholder={placeholder}
              name={name as string}
              value={value || ""}
              onChange={onChange}
              className={className}
            />
            {error && (
              <p
                style={{ color: "red", fontSize: "12px", textAlign: "center" }}
              >
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </>
  );
}
