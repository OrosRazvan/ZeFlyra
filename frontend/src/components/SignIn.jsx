import React, { useState } from "react";
import backgroundVideo from "../assets/sky-cloud-video.mp4"; 
import { Link } from "react-router-dom";

function SignIn(){
  const[email, setEmail] = useState("");
  const[emailError, setEmailError] = useState("");
  const[password, setPassword] = useState("");
  const[passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validateInputData= (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let valid = true;

    if(email.trim() === ""){
      setEmailError("Email is required!");
      valid = false;
    } else if(!validateEmail){
      setEmailError("Email format is inccorect!");
      valid = false;
    }
   
    if(password === ""){
      setPasswordError("Password is required!");
      valid = false;
    } else if(password.length < 6 || password.length > 20){
      setPasswordError("Password must be between 6 and 20 characters!");
      valid = false;
    }

    if(valid){
      console.log("Valid Data!");
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Video de fundal */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Formularul SignIn */}
      <div className="relative z-10 bg-white bg-opacity-80 p-10 rounded-3xl shadow-[0_10px_20px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.10),0_30px_60px_rgba(0,0,0,0.05)] max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-center text-[#003366] mb-6">
          Welcome Back!
        </h2>

        <form className="space-y-6" onSubmit={validateInputData}>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-[#003366] ml-5"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Enter your email"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="text-lg text-red-500 mt-1 ml-1">{emailError}</div>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-[#003366] ml-5"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Enter your password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
            />
            {passwordError && <div  className="text-lg text-red-500 mt-1 ml-1">{passwordError}</div>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#003366] text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>

          {/* Rememeber me si Forgot Password */}
          <div className="flex flex-row items-center mt-6 justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#003366] border-gray-300 rounded focus:ring-[#003366]"
              />
              <span className="text-sm text-[#003366] cursor-pointer transition duration-200 ease-in-out">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm text-[#003366] hover:underline transition duration-200 ease-in-out"
            >
              Forgot your password?
            </a>
          </div>

          <div className="flex flex-row justify-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/register" className="ml-2 underline text-[#003366] cursor-pointer hover:text-indigo-700">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
