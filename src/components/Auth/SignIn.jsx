import { useState } from "react";
import AuthInput from "../common/AuthInput";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // auth logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">
      {/* Header */}
      <div className="mt-16 mb-10">
        <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
        <p className="text-gray-500 mt-2">
          Sign in to continue your campus ride.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSignIn} className="flex flex-col gap-5">
        <AuthInput
          label="Email"
          type="email"
          placeholder="you@school.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-gray-500"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-4 rounded-xl text-lg font-semibold mt-4"
        >
          Sign In
        </button>
      </form>

      {/* Footer */}
      <div className="mt-auto mb-10 text-center">
        <p className="text-gray-500">
          Don’t have an account?{" "}
          <Link to="/auth/signin" className="text-black font-semibold cursor-pointer">
            Sign up
          </Link >
        </p>
      </div>
    </div>
  );
}
