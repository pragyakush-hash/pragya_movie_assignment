import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import movieReducer from "../redux/movies/movieSlice";
import movieDetailReducer from "../redux/movieDetails/movieDetailSlice";
import addToFavReducer from "../redux/addToFav/addToFavSlice";
import searchMovieReducer from "../redux/searchMovie/searchMovieSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    movieDetail: movieDetailReducer,
    addToFav: addToFavReducer,
    searchMovie: searchMovieReducer,
  },
});
