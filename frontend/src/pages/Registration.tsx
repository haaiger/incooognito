import { useState } from "react";
import { Link } from "react-router-dom";

/** Страница регистрации в системе. */
function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", { login, password, email });
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
          htmlFor="email"
        >
          Email
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
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
