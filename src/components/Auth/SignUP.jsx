import { useState } from "react";
import AuthInput from "../common/AuthInput";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    // signup logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">
      {/* Header */}
      <div className="mt-16 mb-10">
        <h1 className="text-3xl font-bold">Create Account 🚀</h1>
        <p className="text-gray-500 mt-2">
          Join Campus Ride and move smarter.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSignUp} className="flex flex-col gap-5">
        <AuthInput
          label="Full Name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          placeholder="Create a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white py-4 rounded-xl text-lg font-semibold mt-4"
        >
          Sign Up
        </button>
      </form>

      {/* Footer */}
      <div className="mt-auto mb-10 text-center">
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-black font-semibold cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
