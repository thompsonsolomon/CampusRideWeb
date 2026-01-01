import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from "./components/common/LoadingSpinner"
import Auth from "./Pages/Auth"


// Lazy load components for better performance
// const LandingPage = lazy(() => import("./pages/LandingPage"))


function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={
            <Auth />
          } />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
