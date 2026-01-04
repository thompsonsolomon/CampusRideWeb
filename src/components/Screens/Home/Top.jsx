import React from 'react'
// import Out from  "../../../assets/icons/Out.png";
import Out from "../../../assets/icons/out.png"
function Top() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const HandleLogOut = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  }
  return (
    <div>
      {/* div.Top - Hello, {currentUser ? currentUser.name : 'Guest'}! */}
      <div className='flex w-full justify-center  items-center '>
        <div className="w-[90%] flex justify-between items-center">
        <h1 className="text-[20px] text-black font-bold ">Welcome, {currentUser ? currentUser.name : 'Guest'}!</h1>
        <div onClick={HandleLogOut} className="bg-white p-3 rounded-full cursor-pointer  flex justify-center items-center">
        <img src={Out} className='w-4 h-4' alt="logoutIcon" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Top