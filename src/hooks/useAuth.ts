import { useState } from "react";
import { AllFormError, SubmitData } from "../types/Auth.types";
import { useTranslation } from "react-i18next";

export const useAuth = () => {
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const allFormErrors: AllFormError = t("auth.authError.allForm", {
    returnObjects: true,
  }) as AllFormError;

  const login = async (data: SubmitData) => {
    const authHeader = "Basic " + btoa(`${data.username}:${data.password}`);

    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/ArtemZotov02/db/users?username=${data.username}`
      );
      const responseData = await response.json();

      if (responseData.length === 0) {
        setError(allFormErrors.userNotFound);
      } else {
        const user = responseData[0];

        if (user.password === authHeader) {
          setError("");
          localStorage.setItem("user", JSON.stringify({ user: user.username }));
        } else {
          setError(allFormErrors.wrongPass);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (data: SubmitData) => {
    const authHeader = "Basic " + btoa(`${data.username}:${data.password}`);

    const existingUserResponse = await fetch(
      // `http://localhost:5001/users?username=${data.username}`
      `https://my-json-server.typicode.com/ArtemZotov02/db/users?username=${data.username}`
    );
    const existingUsers = await existingUserResponse.json();

    if (existingUsers.length > 0) {
      setError(allFormErrors.userRegistered);
      return;
    }

    try {
      // const response = await fetch("http://localhost:5001/users", {
      const response = await fetch("https://my-json-server.typicode.com/ArtemZotov02/db/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: authHeader,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        setError(responseData.username[0]);
      } else {
        setError("");
        await login({ username: data.username, password: data.password });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  return { login, register, logout, setError, error };
};
