import { useState } from "react";
import AuthInput from "../common/AuthInput";
import { Link } from "react-router-dom";
import GetStarted from "../../assets/images/get-started.png";


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
  <div className="min-h-screen bg-white w-full flex flex-col ">
   {/* Header */}
   <div className="mb-10 relative">
    <img src={GetStarted} className="w-full h-[470px]" alt="getStarted" />
    <h1 className="text-3xl absolute bottom-[100px] w-full pl-10 text-black font-bold">Create Your  Account</h1>
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

     <button
      type="submit"
      className="bg-yellow-500 text-white py-4 rounded-xl text-lg font-semibold mt-4"
     >
      Sign Up
     </button>
    </form>
   </div>

   {/* Footer */}
   <div className="mt-auto mb-10 text-center">
    <p className="text-gray-500">
     Already have an account?{" "}
     <Link to="/auth/login" className="text-yellow-500 font-semibold cursor-pointer">
      Sign in
     </Link>
    </p>
   </div>
  </div>
 );
}
