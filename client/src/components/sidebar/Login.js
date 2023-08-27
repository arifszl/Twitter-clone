import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store";

const Login = () => {
  const navigate = useNavigate();
  let inputNameRef = useRef("");
  let inputPasswordRef = useRef("");
  let dispatch = useDispatch();

  let sendLoginFormData = async (formData) => {
    let response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
      // set credentials to be true to allow cookies to be sent from the server to the client
      credentials: "include",
    });
    return response;
  };

  let formSubmitHandler = async (e) => {
    e.preventDefault();
    let formData = {
      username: inputNameRef.current.value,
      password: inputPasswordRef.current.value,
    };
    // console.log(formData);
    let response = await sendLoginFormData(formData);

    let data = await response.json();
    console.log(data);
    console.log(data.user);
    dispatch(
      setLogin({
        username: data.user.username,
        userID: data.user._id,
      }),
    );
    navigate("/");
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="text-black body-font relative"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-Red-900">
            Login
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-black "
                >
                  Username
                </label>
                <input
                  ref={inputNameRef}
                  type="text"
                  id="year"
                  name="year"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-black "
                  >
                    Password
                  </label>
                  <input
                    ref={inputPasswordRef}
                    type="text"
                    id="year"
                    name="year"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>

            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
