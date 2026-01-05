import React from 'react'
import MapImg from "../../../assets/images/smallmap.png";
import To from "../../../assets/icons/to.png";
import Point from "../../../assets/icons/point.png";
import { DummyHistory } from '../../../data';
function HistoryCard() {

 return (
  <>
   {DummyHistory.map((ride, index) => (
    <section className="mapContainer  w-full bg-white p-2 rounded-xl flex   justify-start items-center">
     <div
      key={index}
      className="flex flex-col gap-2 justify-between items-center w-full"
     >
      {/* Top */}
      <div className="flex gap-2 justify-between items-start w-full">
       <div className="flex justify-start items-center gap-4">
        <img
         src={MapImg}
         className="w-[50px] h-[50px] rounded-xl"
         alt="map"
        />
       </div>

       <div className="flex flex-col">
        <div className="flex gap-4 items-center mb-2">
         <img src={To} alt="to" className="w-4 h-4" />
         <p className="text-black text-[10px]">{ride.to}</p>
        </div>

        <div className="flex gap-4 items-center">
         <img src={Point} alt="from" className="w-4 h-4" />
         <p className="text-black text-[10px]">{ride.from}</p>
        </div>
       </div>
      </div>

      {/* Details */}
      <ul className="bg-gray-100 w-full overflow-y-auto hide-scrollbar p-2 rounded-lg h-[18dvh] scroll-smooth">
       <li className="text-black text-[10px] mb-2 flex justify-between border-b-2 border-white">
        <span>Date & Time:</span>
        <span className="font-bold">{ride.dateTime}</span>
       </li>

       <li className="text-black text-[10px] mb-2 flex justify-between border-b-2 border-white">
        <span>Rider:</span>
        <span className="font-bold">{ride.rider}</span>
       </li>

       <li className="text-black text-[10px] mb-2 flex justify-between border-b-2 border-white">
        <span>Distance:</span>
        <span className="font-bold">{ride.distance}</span>
       </li>

       <li className="text-black text-[10px] mb-2 flex justify-between border-b-2 border-white">
        <span>Payment Status:</span>
        <span
         className={`font-bold ${ride.paymentStatus === "Paid"
          ? "text-green-500"
          : "text-red-500"
          }`}
        >
         {ride.paymentStatus}
        </span>
       </li>
      </ul>
     </div>
    </section>
   ))}
  </>

 )
}

export default HistoryCard