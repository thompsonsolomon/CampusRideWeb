import { useState } from "react";
import AuthInput from "../common/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import GetStarted from "../../assets/images/get-started.png";
import { signUpUser } from "../../utils/authUtils";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      const result = await signUpUser({
        email,
        password,
        userName: name,
      });

      if (!result.success) {
        setError(result.error);
        return;
      }

      // ✅ Redirect after successful signup
      navigate("/");

    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white w-full flex flex-col">
      {/* Header */}
      <div className="mb-10 relative">
        <img src={GetStarted} className="w-full h-[470px]" alt="getStarted" />
        <h1 className="text-3xl absolute bottom-[100px] w-full pl-10 text-black font-bold">
          Create Your Account
        </h1>
      </div>

      <div className="w-full flex items-center flex-col">
        {/* Form */}
        <form onSubmit={handleSignUp} className="flex w-[90%] flex-col gap-5">
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

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 text-white py-4 rounded-full text-lg font-semibold mt-4 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-auto mb-10 text-center">
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-yellow-500 font-semibold cursor-pointer"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}