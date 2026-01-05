import React from 'react'
import Top from '../components/common/Top'
import ResponsiveHeader from '../components/common/ResponsiveHeader'
import ChatCard from '../components/Screens/Chat/ChatCard'

function Chat() {
 return (
  <div className='bg-gray-100 containerFluid min-h-screen pt-[20px]'>
   <div className="flex w-[90%]  flex-col justify-start min-h-screen pt-[10px] ">
    <Top text="Chat List" />

    <ChatCard />
    <ResponsiveHeader />
   </div>
  </div>
 )
}

export default Chat