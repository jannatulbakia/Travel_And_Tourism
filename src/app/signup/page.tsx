"use client";

import { useState } from "react";

export default function SignupPage() {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Info:", { name, email, password });
    // 👉 Add API call or NextAuth/Firebase logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white/60 p-8 shadow-xl backdrop-blur-md">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
              placeholder="Last Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
              placeholder="Password"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 py-2 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
