import React from 'react'
import ProfileImg from "../../../assets/images/profileImg.png"
import editButton from "../../../assets/icons/edit.png"
function ProfileCard() {
  return (
    <div className='p-4 m-2 flex justify-center items-center  w-full relative'>
     <img src={ProfileImg} className='rounded-full w-[100px] h-[100px]' alt="" />
     <div className="edit absolute bottom-3 left-[55%]">
      <img src={editButton} alt="" />
     </div>
    </div>
  )
}

export default ProfileCard