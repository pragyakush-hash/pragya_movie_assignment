import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMoviesDetails } from "./movieDetailsApi";

export const fetchMovieById = createAsyncThunk(
  "movie/fetchMovieById",
  async (id, { rejectWithValue }) => {
    console.log("hello from asyncthunk")
    try {
      const data = await fetchMoviesDetails(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  movie: [],
  loading: false,
  error: null,
};

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch movie";
      });
  },
});

export default movieDetailSlice.reducer;
