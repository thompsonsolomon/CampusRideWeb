import { useState } from "react";
import AuthInput from "../common/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import GetStarted from "../../assets/images/get-started.png";

export default function SignIn() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
const navigate = useNavigate();
 const handleSignIn = (e) => {
  e.preventDefault();
  console.log({ email, password });
  // auth logic here
  navigate("/");
  localStorage.setItem("currentUser", JSON.stringify({ name: "John Doe", email }));
 };

 return (
  <div className="min-h-screen bg-white flex flex-col">
   {/* Header */}
   <div className="mb-10 relative">
    <img src={GetStarted} className="w-full h-[470px]" alt="getStarted" />
    <h1 className="text-3xl absolute bottom-[100px] w-full pl-10 text-black font-bold">Welcome 👋</h1>
    {/* <p className="text-gray-500 mt-2">
          Sign in to continue your campus ride.
        </p> */}
   </div>

   {/* Form */}
   <div className="w-full flex items-center flex-col">

    <form onSubmit={handleSignIn} className="flex w-[90%] flex-col gap-5">
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
      className="bg-yellow-500 text-white py-4 rounded-full text-lg font-semibold mt-4"
     >
      Sign In
     </button>
    </form>
   </div>

   {/* Footer */}
   <div className="mt-auto mb-10 text-center">
    <p className="text-gray-500">
     Don’t have an account?{" "}
     <Link to="/auth/signin" className="text-yellow-500 font-semibold cursor-pointer">
      Sign up
     </Link >
    </p>
   </div>
  </div>
 );
}
