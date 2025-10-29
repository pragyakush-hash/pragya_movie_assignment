import React from "react";

const RecentlyViewMovieCard = ({ id, title, image, overview }) => {
  return (
    <div>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 m-5"
      >
        <img
          className="rounded-t-xl"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            {overview.length > 100 ? overview.slice(0, 100) + "..." : overview}
          </p>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800"
          >
            Movie Details
          </button>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 ml-2"
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewMovieCard;
