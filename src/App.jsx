import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from "./components/common/LoadingSpinner"
import { Onboarding, SignIn, SignUp } from "./Pages/Auth"
import Home from "./Pages/Home";
import History from "./Pages/History";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import { useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./Helpers/ProtectedRoute";

function App() {
  // const currentUser = {    name: "John Doe",    email: "test@g,mail.com"};
  // const currentUser = null; // For testing onboarding flow
  const { user } = useAuth()
  const currentUser = null
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />


          <Route path="/history" element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          } />


          <Route path="/chat" element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          } />


          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />



          <Route path="/onboarding" element={

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
