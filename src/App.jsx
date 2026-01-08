import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from "./components/common/LoadingSpinner"
import { Onboarding, SignIn, SignUp } from "./Pages/Auth"
import Home from "./Pages/Home";
import History from "./Pages/History";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";

function App() {
  // const currentUser = {    name: "John Doe",    email: "test@g,mail.com"};
  // const currentUser = null; // For testing onboarding flow
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={
            currentUser ?
              <>
                <Home />
              </> :
              <Onboarding />
          } />


          <Route path="/history" element={
            <History />
          } />


          <Route path="/chat" element={
            <Chat />
          } />


          <Route path="/profile" element={
            <Profile />
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
