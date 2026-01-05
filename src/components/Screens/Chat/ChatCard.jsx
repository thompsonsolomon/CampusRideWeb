import React from 'react'
import EmptyMessage from "../../../assets/icons/empty.png"
function ChatCard() {
  return (
    <div className='flex justify-center items-center h-[80dvh]'>
     <img src={EmptyMessage} alt="" />

    </div>
  )
}

export default ChatCard