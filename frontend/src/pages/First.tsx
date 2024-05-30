import { Link } from "react-router-dom";

function First() {
  return (
    <div className="flex-center flex-col h-screen">
      <h1>Первая страница</h1>

      <Link to="/">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Назад
        </button>
      </Link>
    </div>
  );
}

export default First;
