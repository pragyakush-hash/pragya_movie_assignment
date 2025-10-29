import React, { Profiler, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MovieDetails from "./pages/MovieDetails";
import MovieListPage from "./pages/MovieListPage";
import FavoriteMoviesList from "./component/FavoriteMoviesList";
import { useSelector } from "react-redux";
// import { addVisitedPage } from "./redux/auth/authSlice";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const currentTheme = useSelector((state) => state.auth.mode);
  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  // const RouteTracker = () => {
  //   const location = useLocation();
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(addVisitedPage(location.pathname));
  //   }, [location.pathname, dispatch]);
  // };
  return (
    <div>
      <BrowserRouter>
        {/* <RouteTracker /> */}
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Movies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
            <Route path="/movie_list" element={<MovieListPage />} />
            <Route path="favorite_movie" element={<FavoriteMoviesList />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
