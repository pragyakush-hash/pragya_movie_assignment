import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToFavoriteMovie } from "../redux/addToFav/addToFavSlice";
import { toast, ToastContainer } from "react-toastify";

function FavoriteMoviesList() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.addToFav);

  console.log(movieList, "movieslistllllfavilist jsx");

  const handleRemove = (id) => {
    dispatch(removeToFavoriteMovie(id));
    toast("Remove favorite movie!!");
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-500 mt-5">
          🎬 Favorite Movie List
        </h1>{" "}
      </div>
      <div className="flex flex-row flex-wrap ">
        {console.log(movieList.length, "length")}
        <div>
          {movieList.length === 0 ? (
            <h1 className="text-3xl font-bold mb-6 text-center text-black-500 mt-5">
              No favorite movies yet.
            </h1>
          ) : (
            <>
              {movieList.map((movie) => (
                <div
                  key={movie.id}
                  className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 m-5"
                  // onClick={handleDetails}
                >
                  <img
                    className="rounded-t-xl"
                    src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                    alt={movie.title}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {movie.title}
                    </h5>
                    <p className="mb-3 text-gray-700 dark:text-gray-400">
                      {movie.overview.length > 100
                        ? movie.overview.slice(0, 100) + "..."
                        : movie.overview}
                    </p>
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800"
                      onClick={() => handleRemove(movie.id)}
                    >
                      remove To FavoriteMovie
                    </button>
                  </div>
                </div>
              ))}
              <ToastContainer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default FavoriteMoviesList;
