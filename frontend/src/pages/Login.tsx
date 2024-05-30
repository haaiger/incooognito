import { useState } from "react";
import { Link } from "react-router-dom";

/** Страница для входа в систему. */
function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", { login, password });
  };

  return (
    <>
      <h1>Чтобы продолжить, нужно войти в систему!</h1>

      <form
        onSubmit={handleSubmit}
        className="items-center flex flex-col gap-y-5"
      >
        <label
          className="text-gray-700 text-sm font-bold text-center"
          htmlFor="login"
        >
          Login
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="login"
            type="text"
            placeholder="Enter your login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>

        <label
          className="text-gray-700 text-sm font-bold text-center"
          htmlFor="password"
        >
          Password
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="text-gray-700 text-sm font-bold text-center">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          Show Password
        </label>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Войти
          </button>
        </div>
      </form>

      <Link to="/registration">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Регистрация
        </button>
      </Link>
    </>
  );
}

export default Login;
