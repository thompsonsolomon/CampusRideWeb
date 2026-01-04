import React from 'react'
import SearchIcon from "../../../assets/icons/search.png"
function Search() {
 const HandleGoogleLocationSearch = () => {
  console.log("Google Location Search Clicked");
  // Implement Google Location Search Logic Here
 }
 return (
  <div className='flex w-full items-center justify-center '>
   <div className="w-[90%] bg-white p-2 m-4 rounded-full border-2 border-gray-300 flex justify-start items-center gap-4">

    <img src={SearchIcon} alt="searchIcon" className='w-6 h-6' onClick={HandleGoogleLocationSearch} />
    <input type="text" className='text-[18px] outline-none border-none w-full ' placeholder='Where do you want to go?' />
   </div>
  </div>
 )
}

export default Search