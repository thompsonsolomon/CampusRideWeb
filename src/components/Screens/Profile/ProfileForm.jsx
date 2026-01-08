import React from 'react'

function ProfileForm() {
 const FormData = [
  {
   label: "First Name",
   placeholder: "First Name",
   value: "Thompson",
   type: "text"
  },
   {
   label: "Last Name",
   placeholder: "Last Name",
   value: "Solomon",
   type: "text"
  },
   {
   label: "Email",
   placeholder: "example@gmail.com",
   value: "example@gmail.com",
   type: "email"
  },
   {
   label: "Phone Number",
   placeholder: "Phone Number",
   value: "+234 814 134 2103",
   type: "text"
  },

    {
   label: "Role",
   value: "User",
   type: "role"
  },
 ]

 console.log(FormData)
 return (
  <div className='bg-white w-full flex justify-start items-start p-6 rounded-md'>
   <form  className='w-full'>
    {
     FormData.map((data , idx) => (
      <div key={idx} className=" flex flex-col items-start w-full justify-start gap-2 mt-6">
       <label htmlFor="Name" className='text-gray-400 text-[18px]'>
        {data.label}
       </label>
       <input type={data.type}
        placeholder={data.placeholder}
        value={data?.value}
        className='bg-gray-300 w-[100%] pl-6 pt-3 pb-3 text-[18px] outline-none rounded-full'
       />
      </div>

     ))
    }






   </form>
  </div>
 )
}

export default ProfileForm