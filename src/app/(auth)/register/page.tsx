"use client";

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");

  // Simple password strength logic (optional)
  const passwordStrength = Math.min(password.length * 10, 100);

  return (
    <div className="min-h-screen flex">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-10 relative">
        {/* Logo in top-left (over the form on small screens) */}
        <div className="absolute top-4 left-4 md:hidden">
          <h1 className="text-lg font-bold">StaffTeasy</h1>
        </div>

        {/* Form Container */}
        <div className="max-w-sm mx-auto w-full p-4 pr-10">
          {/* Logo for larger screens */}
          <div className="hidden md:block mb-8">
            <h1 className="text-4xl font-bold">StaffTeasy</h1>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Let’s get you started</h2>

          <form className="space-y-4">
            {/* Full name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Email address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Phone number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Create password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Create password
              </label>
              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
              />
              {/* Simple Password Strength Bar */}

            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-[#1D3E53] to-[#115B66]  text-white py-2 rounded font-medium"
            >
              Sign Up
            </button>

            {/* Already a user? Login */}
            <p className="text-sm text-center mt-2 text-gray-700">
              Already a user?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-[#1D3E53] to-[#115B66] relative text-white">
        {/* Nav Links */}
        <div className="absolute top-4 right-4 flex space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Centered Text */}
        <div className="flex items-center justify-center w-full p-8">
          <h2 className="text-4xl font-bold max-w-sm leading-relaxed">
            Some positive sentences to reinforce the signup
          </h2>
        </div>
      </div>
    </div>
  );
}
