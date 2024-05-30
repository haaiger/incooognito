import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex-center h-screen flex-col gap-y-5">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="text-gray-900">Страница не найдена</p>

      <Link to="/">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Главная страница
        </button>
      </Link>
    </div>
  );
}
export default NotFound;
