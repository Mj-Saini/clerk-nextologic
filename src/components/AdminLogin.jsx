"use client";

import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProviderIcon } from "./common/Icons";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      console.error("Login Error:", err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Google User:", user);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error("Google Sign-Up Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-black"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-black"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black-700 focus:ring-2 focus:ring-black focus:ring-opacity-50 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div className="bg-gray-100 text-gray-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div
          onClick={handleGoogleSignUp}
          className="flex justify-center items-center gap-2 px-3 py-2 mt-5 cursor-pointer"
        >
          <GoogleAuthProviderIcon /> continue as google
        </div>

        {/* Link to Sign-Up Page */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a
            href="/admin-signup"
            className="text-black hover:underline focus:outline-none"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
