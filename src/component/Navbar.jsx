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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchsearchMovie(inputQuery));
    setInputQuery("");
  };

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };

  return (
    <>
      <nav className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-red-700 dark:text-white">
            🎬 Movie List
          </h1>
        </div>

        <form
          className="w-full md:w-1/3 flex items-center mb-4 md:mb-0"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              type="search"
              onChange={handleChange}
              id="default-search"
              value={inputQuery}
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
              required
            />
            <svg
              className="absolute left-3 top-3 w-4 h-4 text-gray-500 dark:text-gray-300"
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
              className="absolute right-1.5 top-1.5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-3 py-1.5"
            >
              Search
            </button>
          </div>
        </form>

        <div className="w-full md:w-auto flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-red-700"
          >
            Movies
          </Link>
          <Link
            to="/movie_list"
            className="text-gray-800 dark:text-gray-100 hover:text-red-700"
          >
            Filter
          </Link>
          <Link
            to="/favorite_movie"
            className="text-gray-800 dark:text-gray-100 hover:text-red-700"
          >
            Favorites
          </Link>
          <Link
            to="/profile"
            className="text-gray-800 dark:text-gray-100 hover:text-red-700"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-gray-800 dark:text-gray-100 hover:text-red-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-800 dark:text-gray-100 hover:text-red-700"
          >
            Sign Up
          </Link>

          <button
            onClick={() => dispatch(toggleTheme())}
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 transition-all"
          >
            {currentTheme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
