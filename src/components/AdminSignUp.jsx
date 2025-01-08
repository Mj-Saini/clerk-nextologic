import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"; // Import Firebase Auth
import { auth, provider } from "./firebase"; // Import the initialized auth instance from firebase.js
import { GoogleAuthProviderIcon } from "./common/Icons";

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); 

    const { email, password } = formData;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      console.error("Error signing up:", err.message);
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
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
         
          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* Email */}
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
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* Password */}
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
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black focus:ring-2 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {error && (
            <div className="text-[red] p-3 rounded mb-4 text-sm text-center">
              {error}
            </div>
          )}

          <div
            onClick={handleGoogleSignUp}
            className="flex justify-center items-center gap-2 px-3 py-2 mt-5 cursor-pointer"
          >
        <GoogleAuthProviderIcon/>   continue as google
          </div>
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/admin-login"
            className="text-black hover:underline focus:outline-none"
          >
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminSignUp;
