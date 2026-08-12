import React, { useState } from 'react'
import { Link } from 'react-router'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
const Reset = () => {

  let [show,setShow] = useState(false)
  let [showtow,setShowtow] = useState(false)
  return (
        <>
        <div>    
          <div className='max-w-[520px] shadow-md p-[20px] mx-auto my-[80px] rounded-md'>
            <h2 className='text-black text-center font-poppins font-semibold text-[32px] py-[15px]'>Reset Password</h2>
             <div className='relative'>
              <input type={show ? "text" : "password"} placeholder='Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
        
              <div className='absolute cursor-pointer top-[15px] right-[10px] text-[22px]' onClick={()=> setShow(!show)}>
                {
                show ?
                <IoEye />
                :
                <IoMdEyeOff />
                }
                </div>
               </div>
                 <div className='relative'>
                  <input type={show ? "text" : "password"} placeholder='Confirm Password' className='w-full rounded-md mb-[12px] py-[14px] px-[16px] border border-[#ccc8c8]' />
                  <div className='absolute cursor-pointer top-[15px] right-[10px] text-[22px]' onClick={()=> setShowtow(!showtow)}>
                  {
                    showtow ?
                    <IoEye />
                    :
                    <IoMdEyeOff />
                  }
                  </div>
                   </div>  
                <div className='flex justify-between items-center'> 
                <div className='flex items-center my-[8px]'>
                 <label className='font-poppins font-md text-sm text-[#666666]'><input type="checkbox" className='mr-2' />Remember me</label>
                </div>
                </div>
               <Link to="/login">
                <button className='bg-primary w-full cursor-pointer py-[10px] my-[12px] rounded-full text-white font-poppins font-semibold text-[16px]'>Reset Password</button>
               </Link>
                </div>
            </div>
        </>
  )
}

export default Reset