import React from 'react'
import HistoryCard from '../components/Screens/History/HistoryCard'
import ResponsiveHeader from '../components/common/ResponsiveHeader'
function History() {
 return (
  <div className='containerFluid bg-gray-100 min-h-screen pt-[20px]'>
   <div className="flex w-[90%] flex-col justify-start min-h-screen pt-[10px] items-start">
    <h2 className='text-[18px] text-black pb-4 font-bold '>Recent Rides</h2>
    <div className="flex flex-col w-full gap-4 h-full mb-[100px]">
     <HistoryCard />
    </div>
   </div>

   <ResponsiveHeader />
  </div>
 )
}

export default History