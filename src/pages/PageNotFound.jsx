import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
        <p className="mt-2 text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
