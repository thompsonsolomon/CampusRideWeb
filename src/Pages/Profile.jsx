import React from 'react'
import ProfileCard from '../components/Screens/Profile/ProfileCard'
import ProfileForm from '../components/Screens/Profile/ProfileForm'
import ResponsiveHeader from '../components/common/ResponsiveHeader'

function Profile() {
 return (
  <div className='containerFluid bg-gray-100 min-h-screen pt-[20px]'>
   <div className="flex w-[90%] flex-col justify-start min-h-screen pt-[10px] items-start  mb-[100px]">
    <h1 className="text-[20px] text-black font-bold "> Your Profile</h1>
    <ProfileCard />
    <ProfileForm />
    <ResponsiveHeader />
   </div>
  </div>
 )
}

export default Profile