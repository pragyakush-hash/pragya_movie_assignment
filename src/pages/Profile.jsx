import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVisitedPage, selectAuth } from "../redux/auth/authSlice";
import { Link } from "react-router-dom";
import RecentlyViewMovieCard from "../component/RecentlyViewMovieCard";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const { visitedPages } = useSelector(selectAuth);
  const { movies } = useSelector((state) => state.movie);
  // const dispatch = useDispatch();
  console.log("Visited Pages:", visitedPages);
  // const data = movies.results;
  // console.log("data", data);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("user"));
    setProfileData(storeData);
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     dispatch(addVisitedPage([...data]));
  //   }
  // }, [movies, dispatch]);

  return (
    <div className="mt-10 h-120">
      <div className="p-3 w-1/4 border bg-white">
        <h1>PROFILE</h1>

        <div className="flex items-center justify-between mb-2"></div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
          {profileData?.userName}
        </p>
        <p className="mb-3 text-sm font-normal">
          <a href="#" className="hover:underline">
            {profileData?.email}
          </a>
        </p>
        {/* <p className="mb-4 text-sm">
          Open-source contributor. Building{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            flowbite.com
          </a>
          .
        </p> */}
        <ul className="flex text-sm">
          <li className="me-2">
            <a href="#" className="hover:underline">
              <span className="font-semibold text-gray-900 dark:text-white">
                799
              </span>
              <span>Following</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <span className="font-semibold text-gray-900 dark:text-white">
                3,758
              </span>
              <span>Followers</span>
            </a>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-500 mt-10">
          Recently viwed Movies{" "}
        </h1>
        {console.log(visitedPages.length, "length of recently viwed page")}
        {visitedPages?.length === 0 ? (
          <h1 className="text-3xl font-bold mb-6 text-center  mt-10">No Movie visited yet</h1>
        ) : (
          <div className="flex flex-wrap">
            {visitedPages.map((movie) => (
              <RecentlyViewMovieCard {...movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
