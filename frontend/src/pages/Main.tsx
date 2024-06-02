import { Link } from "react-router-dom";

import { useAuthorization } from "../hooks";

function Main() {
  const auth = useAuthorization();

  return (
    <ul className="flex-center flex-col gap-y-5">
      <li className="flex-center">
        <Link to="/login">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Авторизация
          </button>
        </Link>
      </li>

      <li className="flex-center">
        <Link to="/registration">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Регистрация
          </button>
        </Link>
      </li>

      <li className="flex-center">
        <button
          type="button"
          onClick={() => auth.logout()}
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Выход
        </button>
      </li>

      <li className="flex-center">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Обновление
        </button>
      </li>

      <li className="flex-center">
        <Link to="/first">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Страница 1
          </button>
        </Link>
      </li>
    </ul>
  );
}

export default Main;
