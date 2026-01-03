import React from 'react'

function Top() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
     {/* div.Top - Hello, {currentUser ? currentUser.name : 'Guest'}! */}
     <div>
      <h1 className="text-3xl text-black font-bold p-6">Welcome, {currentUser ? currentUser.name : 'Guest'}!</h1>
      <p className="text-gray-400 p-6">Welcome back to Campus Ride.</p>
     </div>
    </div>
  )
}

export default Top