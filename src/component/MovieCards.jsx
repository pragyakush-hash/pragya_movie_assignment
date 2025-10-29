import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import {
  addToFavoriteMovie,
  removeToFavoriteMovie,
} from "../redux/addToFav/addToFavSlice";
import { addVisitedPage } from "../redux/auth/authSlice";

const MovieCards = ({ id, title, backdrop_path, overview }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieList } = useSelector((state) => state.addToFav);
  const isFavorite = movieList.some((favMovie) => favMovie.id === id);

  const handleDetails = () => {
    navigate(`/moviedetails/${id}`);
    const movieItemvisit = {
      id: id,
      title: title,
      image: backdrop_path,
      overview: overview,
    };
    dispatch(addVisitedPage(movieItemvisit));
  };
  const handleAddToFav = () => {
    const movieItem = {
      id: id,
      title: title,
      image: backdrop_path,
      overview: overview,
    };
    if (isFavorite) {
      dispatch(removeToFavoriteMovie(id));
    } else {
      dispatch(addToFavoriteMovie(movieItem));
      toast("Add To favorite list!");
    }
  };
  return (
    <div>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 m-5"
        // onClick={handleDetails}
      >
        <img
          className="rounded-t-xl"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            {overview.length > 100 ? overview.slice(0, 100) + "..." : overview}
          </p>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800"
            onClick={handleDetails}
          >
            Movie Details
          </button>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 ml-2"
            onClick={handleAddToFav}
          >
            Add to Favorite
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MovieCards;
