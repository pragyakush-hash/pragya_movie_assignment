import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMoviesData } from "./movieApi";
import axios from "axios";

// async thunk for fetching movie data

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchMoviesData();
      localStorage.setItem("movies", JSON.stringify(data.results));
      // console.log(data, "data api response");

      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// async thunk for pagination api
const API_KEY = "d04c6c749418821c9b3f8d867482808b";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesPagination = createAsyncThunk(
  "movie/fetchMoviesPagination",
  async (page) => {
    console.log("page", page);
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    console.log(response.data, "paginationn api response");
    return response.data;
  }
);

export const fetchsearchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (InputQuery) => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${InputQuery}`
    );
    return response.data.results;
  }
);

const initialState = {
  loading: false,
  movies: [],
  error: null,
  currentPage: 1,
  totalPages: 1,
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
        // state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMoviesPagination.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchsearchMovie.fulfilled, (state) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch movies";
      });
  },
});
export const { setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;
