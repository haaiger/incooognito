import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { RegistrationFormData } from "../types";

/** Страница регистрации в системе. */
function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const handleSubmitForm = (data: RegistrationFormData) =>
    console.log("Registration Data:", data);

  return (
    <>
      <h1>Регистрация в системе.</h1>

      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="items-center flex flex-col gap-y-5"
      >
        <label
          className="text-gray-700 text-sm font-bold text-center"
          htmlFor="login"
        >
          Логин
          <input
            {...register("login", {
              required: "Логин обязателен!",
              minLength: {
                value: 4,
                message: "Логин должен быть не менее 4 символов!",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.login ? "border-red-500" : ""
            }`}
            id="login"
            type="text"
            placeholder="Введите ваш логин"
          />
        </label>

        {errors.login && (
          <p className="text-red-500 text-xs">{errors.login.message}</p>
        )}

        <label
          className="text-gray-700 text-sm font-bold text-center"
          htmlFor="email"
        >
          Почта
          <input
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный формат почты!",
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Введите Вашу почту"
          />
        </label>

        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <label
          className="text-gray-700 text-sm font-bold text-center"
          htmlFor="password"
        >
          Пароль
          <input
            {...register("password", {
              required: "Пароль обязателен!",
              minLength: {
                value: 4,
                message: "Пароль должен быть не менее 4 символов!",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Введите Ваш пароль"
          />
        </label>

        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}

        <label className="text-gray-700 text-sm font-bold text-center">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          Показать пароль
        </label>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>

      <Link to="/login">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Логин
        </button>
      </Link>
    </>
  );
}

export default Registration;
