import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesPagination } from "../redux/movies/movieSlice";
import { useNavigate } from "react-router-dom";

const MovieListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies, loading, error } = useSelector((state) => state.movie);
  console.log(movies,"moviesssmovie list")

  const [genreFilter, setGenreFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(fetchMoviesPagination());
  }, [dispatch]);

  const genreOptions = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Sci-Fi" },
    { id: 53, name: "Thriller" },
  ];

  const filteredMovies = useMemo(() => {
    let filtered = [...movies.results];
    console.log(filtered,"filteresmoviesss")

    if (genreFilter) {
      console.log("genrefilter",genreFilter)
      filtered = filtered.filter((movie) => {
        if (movie.genre_ids) {
          return movie.genre_ids.includes(Number(genreFilter));
        } else if (movie.genres) {
          return movie.genres.some((g) => g.id === Number(genreFilter));
        }
        return false;
      });
    }

    if (ratingFilter) {
      filtered = filtered.filter(
        (movie) => movie.vote_average >= Number(ratingFilter)
      );
    }

    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "year") {
      filtered.sort(
        (a, b) =>
          new Date(b.release_date).getFullYear() -
          new Date(a.release_date).getFullYear()
      );
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.vote_average - a.vote_average);
    }

    return filtered;
  }, [movies, genreFilter, ratingFilter, sortBy]);
  console.log(filteredMovies, "filteredMovies");

  const handleDetails = (id) => {
    navigate(`/moviedetails/${id}`);
  };

  const MovieCard = ({
    title,
    poster_path,
    release_date,
    vote_average,
    id,
  }) => {
    return (
      <div
        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:scale-105 transition"
        onClick={() => handleDetails(id)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1 truncate text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 text-sm mb-1">
            {new Date(release_date).getFullYear()}
          </p>
          <p className="text-yellow-500 text-sm font-bold">
            {vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        🎬 Movie List
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
          onChange={(e) => setGenreFilter(e.target.value)}
          value={genreFilter}
        >
          <option value="">All Genres</option>
          {genreOptions.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
          onChange={(e) => setRatingFilter(e.target.value)}
          value={ratingFilter}
        >
          <option value="">All Ratings</option>
          <option value="5">Above 5</option>
          <option value="6">Above 6</option>
          <option value="7">Above 7</option>
        </select>

        <select
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="">Sort By</option>
          <option value="title">Title (A-Z)</option>
          <option value="year">Year (Newest)</option>
          <option value="rating">Rating (High-Low)</option>
        </select>
      </div>

      {loading && <p className="text-center">Loading movies...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {filteredMovies.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No movies match your filters.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieListPage;
