import React from 'react'
import Out from "../../../assets/icons/out.png"
import { logout } from '../../../utils/authUtils';
import { useAuth } from '../../../contexts/AuthContext';
import { truncateText } from '../../../data';
function Top() {
  const { user } = useAuth()
  console.log(user);
  const HandleLogOut = () => {
    logout()
  }
  return (
    <div>
      {/* div.Top - Hello, {currentUser ? currentUser.name : 'Guest'}! */}
      <div className='flex w-full justify-center  items-center '>
        <div className="w-[90%] flex justify-between items-center">
          <h1 className="text-[20px] text-black font-bold ">Welcome, {truncateText(user && user?.displayName === null ? user?.email : user.lastName, 10)}</h1>
          <div onClick={HandleLogOut} className="bg-white p-3 rounded-full cursor-pointer  flex justify-center items-center">
            <img src={Out} className='w-4 h-4' alt="logoutIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top