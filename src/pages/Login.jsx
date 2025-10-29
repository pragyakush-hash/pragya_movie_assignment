import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectAuth } from "../redux/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(selectAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ user, password }));
    if (isAuthenticated === true) {
      navigate("/");
    }
    toast("Successfully login");
  };
  return (
    <div className="max-w-sm mx-auto  ">
      <div className="mt-20 font-medium text-2xl text-red-500 ">
        <h1>LOGIN :-</h1>
      </div>
      <form
        className="max-w-sm bg-white mx-auto mt-10 border rounded-br-lg p-10 bg--500/50"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            for=""
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your username
          </label>
          <input
            type="text"
            id="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-red-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder=""
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-red-800 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
