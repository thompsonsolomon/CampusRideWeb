import React from 'react'
// import Out from  "../../../assets/icons/Out.png";
import Out from "../../../assets/icons/out.png"
function Top() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      {/* div.Top - Hello, {currentUser ? currentUser.name : 'Guest'}! */}
      <div className='flex w-full justify-center  items-center '>
        <div className="w-[90%] flex  justify-between items-center">
        <h1 className="text-3xl text-black font-bold p-6">Welcome, {currentUser ? currentUser.name : 'Guest'}!</h1>
        <div className="bg-white p-4 rounded-full cursor-pointer  flex justify-center items-center">
        <img src={Out} className='w-8 h-8' alt="logoutIcon" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Top