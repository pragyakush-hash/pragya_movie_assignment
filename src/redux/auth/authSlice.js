import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isAuthenticated: false,
  mode: "light",
  visitedPages: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const newUser = action.payload;
      console.log("newUser", newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      state.user = newUser;
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser.username === username &&
        storedUser.password === password
      ) {
        state.user = storedUser;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(storedUser));
      } else {
        alert("invalid credential");
        state.isAuthenticated = false;
      }
    },
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    addVisitedPage: (state, action) => {
      const movieToAdd = action.payload;
      state.visitedPages = state.visitedPages.filter(
        (movie) => movie.id !== movieToAdd
      );
      
      state.visitedPages.unshift(movieToAdd);

      if (state.visitedPages.length > 5) {
        state.visitedPages.pop();
      }
    },
    clearVisitedPages: (state) => {
      state.visitedPages = [];
    },
  },
});

export const { signup, login, toggleTheme, addVisitedPage, clearVisitedPages } =
  authSlice.actions;
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
