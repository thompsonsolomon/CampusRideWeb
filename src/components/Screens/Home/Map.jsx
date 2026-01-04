import React from 'react'
import MapImg from "../../../assets/images/map.png"
function Map() {
  return (
    <div className='containerFluid'>
     <div className="flex w-[90%] flex-col justify-start items-start">
      <h2 className='text-[18px] text-black font-bold pt-3'>Your current location</h2>

      <section className="mapContainer w-full flex justify-start items-center">
       <img src={MapImg} className='w-full h-[30dvh] rounded-xl' alt="mapImg" />
      </section>
     </div>
    </div>
  )
}

export default Map