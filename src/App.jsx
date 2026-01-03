import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from "./components/common/LoadingSpinner"
import {Onboarding, SignIn, SignUp} from "./Pages/Auth"

function App() {
  // const currentUser = {    name: "John Doe",    email: "test@g,mail.com"};
  const currentUser = null; // For testing onboarding flow
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={
            currentUser ?  
            <>
            <h1 className="text-3xl font-bold p-6">Hello, {currentUser.name}!</h1>
            <p className="text-gray-400 p-6">Welcome back to Campus Ride.</p> 
            </> :
            <Onboarding />
          } />
          <Route path="/auth/login" element={
            <SignIn />
          } />
           <Route path="/auth/signin" element={
            <SignUp />

          } />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
