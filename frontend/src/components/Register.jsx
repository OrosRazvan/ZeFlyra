import React, { useState } from "react";
import backgroundVideo from "../assets/sky-cloud-video.mp4"; 
import { Link } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateInputData = (e) => {
    e.preventDefault();

    // Resetare erori
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true;

    // Validare First Name
    if (firstName.trim() === "") {
      setFirstNameError("First name is required!");
      valid = false;
    }

    // Validare Last Name
    if (lastName.trim() === "") {
      setLastNameError("Last name is required!");
      valid = false;
    }

    // Validare Email
    if (email.trim() === "") {
      setEmailError("Email is required!");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("The email format is incorrect!");
      valid = false;
    }

    // Validare Password
    if (password === "") {
      setPasswordError("Password is required!");
      valid = false;
    } else if (password.length < 6 || password.length > 20) {
      setPasswordError("Password must be between 6 and 20 characters!");
      valid = false;
    }

    // Validare Confirm Password
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match!");
      valid = false;
    }

    if (valid) {
      console.log("Form data is valid. Proceed with submission.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-auto py-10 px-4 lg:px-0">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 bg-white bg-opacity-80 p-6 sm:p-10 rounded-3xl shadow-lg max-w-md md:max-w-lg lg:max-w-xl w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#003366] mb-4 md:mb-6">
          Welcome To ZeFlyra!
        </h2>
        <p className="text-center text-lg md:text-2xl text-gray-500 mb-6 md:mb-8">
          Let's create your account!
        </p>

        <form className="space-y-4 md:space-y-6" onSubmit={validateInputData}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full">
              <label htmlFor="firstName" className="block text-lg font-medium text-[#003366] ml-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && <div className="text-lg text-red-500 mt-1 ml-1">{firstNameError}</div>}
            </div>

            <div className="w-full mt-4 md:mt-0">
              <label htmlFor="lastName" className="block text-lg font-medium text-[#003366] ml-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && <div className="text-lg text-red-500 mt-1 ml-1">{lastNameError}</div>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-[#003366] ml-1">
              Email Address
            </label>
            <input
              type="text"
              id="text1"
              name="text1"
              className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="text-lg text-red-500 mt-1 ml-1">{emailError}</div>}
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-[#003366] ml-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="text-lg text-red-500 mt-1 ml-1">{passwordError}</div>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-[#003366] ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <div className="text-lg text-red-500 mt-1 ml-1">{confirmPasswordError}</div>}
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full py-3 bg-[#003366] text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
            <p className="text-gray-600">Do you have an account?</p>
            <Link to="/signin" className="ml-2 underline text-[#003366] cursor-pointer hover:text-indigo-700">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Register