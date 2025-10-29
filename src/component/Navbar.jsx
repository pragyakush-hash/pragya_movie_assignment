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
dispatch(fetchsearchMovie(inputQuery))
    setInputQuery("");
  };

  const handleChange = (e) => {
    setInputQuery(e.target.value);
  };
  return (
    <>
      <nav className="min-h-12 bg-white flex justify-around p-5">
        <div>
          <h1 className="text-3xl font-bold  text-center">🎬 Movie List</h1>
        </div>
        <div>
          <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                onChange={handleChange}
                id="default-search"
                className="block  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/">Movies</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/movie_list">Search_By_Filter</Link>
        <Link to="/favorite_movie">Favorite_movie</Link>
        <div>
          <button
            onClick={() => dispatch(toggleTheme())}
            type="button"
            className=" text-white bg-red-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            {currentTheme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
