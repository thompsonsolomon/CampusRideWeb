import MapImg from "../../../assets/images/smallmap.png";
import To from "../../../assets/icons/to.png";
import Point from "../../../assets/icons/point.png";
function RecentRide() {
 return (
  <div className='containerFluid'>
   <div className="flex w-[90%] flex-col justify-start pt-[30px] items-start">
    <h2 className='text-3xl text-black font-bold '>Recent Rides</h2>

    <section className="mapContainer  w-full bg-white p-4 rounded-xl flex justify-start items-center">
     <div className="flex flex-col gap-6 justify-between items-center w-full">
      <div className="flex gap-6 justify-start items-center w-full">

       <div className="left">
        <img src={MapImg} className='w-[100px] h-[100px] rounded-xl' alt="mapImg" />
       </div>
       <div className="right">
        <div className="flex gap-4 justify-start items-center mb-4">
         <img src={To} alt="" className="w-9 h-9" />
         <p className="text-black text-[20px]">1901 Thornridge Cir. Shiloh</p>
        </div>
        <div className="flex gap-6 justify-start items-center mb-4">
         <img src={Point} alt="" className="w-9 h-9" />
         <p className="text-black text-[20px]">4140 Parker Rd. Allentown</p>
        </div>

       </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full">
       {/* <ul className="bg-gray-100 w-full overflow-y-auto p-4 rounded-lg h-[18dvh]"> */}
       <ul className="bg-gray-100 w-full overflow-y-auto hide-scrollbar p-4 rounded-lg h-[18dvh] scroll-smooth">

        <li className="text-black text-[20px] mb-2 flex justify-between py-4 border-b-4 border-white">
         <span>

          Date & Time:
         </span>


         <span className="font-bold">

          16 July 2023, 10:30 PM

         </span>
         

        </li>

          <li className="text-black text-[20px] mb-2 flex justify-between py-4 border-b-4 border-white">
         <span>

          Rider:
         </span>


         <span className="font-bold">

          Jane Cooper

         </span>

        </li>
        
        <li className="text-black text-[20px] mb-2 flex justify-between py-4 border-b-4 border-white">
         <span>

          Distance:
         </span>


         <span className="font-bold">

          5.2 km

         </span>

        </li>






      
        <li className="text-black text-[20px] mb-2 flex justify-between py-4 border-b-4 border-white">
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