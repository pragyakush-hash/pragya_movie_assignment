import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],

  //   totalQuantity: 0,
  //   showFavCart: false,
};

const addToFav = createSlice({
  name: "addToFavorite",
  initialState,
  reducers: {
    addToFavoriteMovie: (state, action) => {
      console.log(action.payload, "action.payload");
      const movieToAdd = action.payload;
      if (!state.movieList.some((movie) => movie.id === movieToAdd.id)) {
        state.movieList.push(movieToAdd);
      }
      console.log(state.movieList, "movielistredux");
    },
    removeToFavoriteMovie: (state, action) => {
      const movieIdToRemove = action.payload;
      state.movieList = state.movieList.filter(
        (movie) => movie.id !== movieIdToRemove
      );
    },
  },
});
export const { addToFavoriteMovie, removeToFavoriteMovie } = addToFav.actions;
export default addToFav.reducer;
