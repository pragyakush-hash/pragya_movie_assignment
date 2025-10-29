import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API_KEY = "d04c6c749418821c9b3f8d867482808b";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (inputQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?query=${encodeURIComponent(
          inputQuery
        )}&api_key=${API_KEY}&language=en-US&page=1`
      );
      console.log(response,"serachresponseeeee")
      return response.data.results;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.status_message || error.message
      );
    }
  }
);

const initialState = {
  searchMovie: [],
  loading: false,
  error: null,
};

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.searchMovie = action.payload;
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch movie";
      });
  },
});

export default searchMovieSlice.reducer;
