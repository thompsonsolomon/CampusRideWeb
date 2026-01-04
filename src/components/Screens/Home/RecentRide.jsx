import MapImg from "../../../assets/images/smallmap.png";
import To from "../../../assets/icons/to.png";
import Point from "../../../assets/icons/point.png";
function RecentRide() {
 return (
  <div className='containerFluid'>
   <div className="flex w-[90%] flex-col justify-start pt-[10px] items-start">
    <h2 className='text-[18px] text-black font-bold '>Recent Rides</h2>

    <section className="mapContainer  w-full bg-white p-2 rounded-xl flex justify-start items-center">
     <div className="flex flex-col gap-2 justify-between items-center w-full">
      <div className="flex gap-2 justify-between items-start w-full">
       <div className="left flex justify-start items-center gap-4">
        <img src={MapImg} className='w-[50px] h-[50px] rounded-xl' alt="mapImg" />
       </div>
       <div className="right">
        <div className="flex gap-4 justify-start items-center mb-2">
         <img src={To} alt="" className="w-4 h-4" />
         <p className="text-black text-[10px]">1901 Thornridge Cir. Shiloh</p>
        </div>
        <div className="flex gap-4 justify-start items-center mb-2">
         <img src={Point} alt="" className="w-4 h-4" />
         <p className="text-black text-[10px]">4140 Parker Rd. Allentown</p>
        </div>

       </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full">
       <ul className="bg-gray-100 w-full overflow-y-auto hide-scrollbar p-2 rounded-lg h-[18dvh] scroll-smooth">

        <li className="text-black text-[10px] mb-2 flex justify-between  border-b-2 border-white">
         <span>

          Date & Time:
         </span>


         <span className="font-bold">

          16 July 2023, 10:30 PM

         </span>
         

        </li>

          <li className="text-black text-[14px] mb-2 flex justify-between  border-b-2 border-white">
         <span>

          Rider:
         </span>


         <span className="font-bold">

          Jane Cooper

         </span>

        </li>
        
        <li className="text-black text-[10px] mb-2 flex justify-between border-b-2 border-white">
         <span>

          Distance:
         </span>


         <span className="font-bold">

          5.2 km

         </span>

        </li>






      
        <li className="text-black text-[10px] mb-2 flex justify-between border-b-2 border-white">
         <span>

          Payment Status:
         </span>


         <span className="font-bold text-green-500">

          Paid

         </span>

        </li>

       </ul>
      </div>
     </div>
    </section>
   </div>
  </div>
 )
}
export default RecentRide