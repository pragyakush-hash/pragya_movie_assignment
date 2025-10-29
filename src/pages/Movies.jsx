import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMoviesPagination,
  setCurrentPage,
} from "../redux/movies/movieSlice";
import MovieCards from "../component/MovieCards";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, currentPage, totalPages } = useSelector(
    (state) => state.movie
  );

  console.log(movies,"movies")
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);
console.log(currentPage,"current")
  useEffect(() => {
    dispatch(fetchMoviesPagination(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage)); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500 mt-10">
        🎬 All Popular Movies {totalPages}
      </h1>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Prev.
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Next
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {movies?.results?.map((item) => (
          <MovieCards {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
