import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/auth/authSlice";
import { fetchsearchMovie } from "../redux/movies/movieSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentTheme = useSelector((state) => state.auth.mode);
  const [inputQuery, setInputQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchsearchMovie(inputQuery));
    setInputQuery("");
  };

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 relative">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 dark:text-white whitespace-nowrap">
          🎬 Movie List
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          <span className="block w-5 h-0.5 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-800 dark:bg-white"></span>
        </button>
      </div>

      <form
        className="w-full md:w-80 flex items-center justify-center order-3 md:order-none"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <input
            type="search"
            onChange={handleChange}
            value={inputQuery}
            id="default-search"
            className="block w-full p-2.5 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Search..."
            required
          />
          <svg
            className="absolute left-3 top-2.5 w-4 h-4 text-gray-500 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 text-white bg-red-700 hover:bg-red-800 font-medium rounded-md text-xs sm:text-sm px-3 py-1.5"
          >
            Search
          </button>
        </div>
      </form>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-3 md:gap-5 text-sm font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-50 transition-all duration-300`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 dark:text-gray-100 hover:text-red-700"
        >
          Movies
        </Link>
        <Link
          to="/movie_list"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 dark:text-gray-100 hover:text-red-700"
        >
          Filter
        </Link>
        <Link
          to="/favorite_movie"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 dark:text-gray-100 hover:text-red-700"
        >
          Favorites
        </Link>
        <Link
          to="/profile"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 dark:text-gray-100 hover:text-red-700"
        >
          Profile
        </Link>
        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 dark:text-gray-100 hover:text-red-700"
        >
          Login
        </Link>
        <Link
          to="/signup"
          onClick={() => setMenuOpen(false)}
          className="text-gray-800 dark:text-gray-100 hover:text-red-700"
        >
          Sign Up
        </Link>

        <button
          onClick={() => {
            dispatch(toggleTheme());
            setMenuOpen(false);
          }}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-xs sm:text-sm px-3 py-1.5 transition-all"
        >
          {currentTheme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
