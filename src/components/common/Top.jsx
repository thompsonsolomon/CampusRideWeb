import Out from "../../assets/icons/out.png"
import { logout } from '../../utils/authUtils'
function Top({ text }) {
 const HandleLogOut = () => {
  logout()
 }
 return (
  <div>
   <div className="w-[100%] flex justify-between items-center ">
    <h1 className="text-[20px] text-black font-bold ">{text}</h1>
    <div onClick={HandleLogOut} className="bg-white p-3 rounded-full cursor-pointer  flex justify-center items-center">
     <img src={Out} className='w-4 h-4' alt="logoutIcon" />
    </div>
   </div>
  </div>
 )
}

export default Top