import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "../redux/movieDetails/movieDetailSlice";
import MovieImageCarousel from "../component/MovieImageCarousel ";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id, "iddd");
  const dispatch = useDispatch();
  const { movie, loading, error } = useSelector((state) => state.movieDetail);
  console.log(movie, "moviess");

  useEffect(() => {
    console.log("hello from moviedetails useefffect");
    if (id) {
      dispatch(fetchMovieById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p className="text-3xl font-bold text-center text-white">Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return null;

  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

  // 3 image links for carousel
  const carouselImages = [
    movie.poster_path && TMDB_IMAGE_BASE + movie.poster_path,
    movie.backdrop_path && TMDB_IMAGE_BASE + movie.backdrop_path,
    movie.belongs_to_collection?.backdrop_path
      ? TMDB_IMAGE_BASE + movie.belongs_to_collection.backdrop_path
      : movie.belongs_to_collection?.poster_path
      ? TMDB_IMAGE_BASE + movie.belongs_to_collection.poster_path
      : null,
  ].filter(Boolean);
  return (
    <div className="flex flex-col items-center px-4 py-10  min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-6">
        <div className="relative size-32 ...">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        {/* <MovieImageCarousel images={carouselImages} /> */}
        <MovieImageCarousel images={carouselImages}/>

        <h2 className="mt-6 text-3xl font-bold text-gray-800">{movie.title}</h2>
        {movie.tagline && (
          <p className="mt-2 text-gray-500 ">{movie.tagline}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Release: {movie.release_date}
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Rating: {movie.vote_average} / 10
          </span>
          {movie.runtime && (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Duration: {movie.runtime} min
            </span>
          )}
          {movie.genres &&
            movie.genres.map((g) => (
              <span
                key={g.id}
                className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded"
              >
                {g.name}
              </span>
            ))}
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">{movie.overview}</p>

        {/* <div className="mt-6">
          <a
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Watch/Homepage
          </a>
        </div> */}

        <div className="mt-8">
          <h4 className="font-semibold text-gray-800 mb-2">
            Production Companies
          </h4>
          <div className="flex flex-wrap gap-4">
            {movie.production_companies &&
              movie.production_companies.map((pc) => (
                <div key={pc.id} className="flex items-center space-x-2">
                  {pc.logo_path && (
                    <img
                      src={TMDB_IMAGE_BASE + pc.logo_path}
                      alt={pc.name}
                      className="h-8"
                    />
                  )}
                  <span className="text-gray-600">{pc.name}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold text-gray-800 mb-2">Spoken Languages</h4>
          <div className="flex flex-wrap gap-2">
            {movie.spoken_languages &&
              movie.spoken_languages.map((lang) => (
                <span
                  key={lang.iso_639_1}
                  className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded"
                >
                  {lang.english_name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
