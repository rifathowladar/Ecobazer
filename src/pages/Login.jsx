import React, { useState } from 'react'
import { Link } from 'react-router'
import Forgot from './Forget';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  let [showPass, setShowPass] = useState(false)
  return (
    <div className="w-130 bg-white p-6 shadow-md mx-auto my-20">
      <h3 className="font-semibold text-hsize text-center">Sign In</h3>
      <input type="text" placeholder="Email" className="fromInput"/>
      <div className="relative mt-3">
        <input name='password' type={showPass ? "text" : "password"} placeholder="Password" className="fromInput"/>
        <div className='absolute right-4 top-3/5 -translate-y-1/2 cursor-pointer text-gray-600 text-xl' onClick={() => setShowPass(!showPass)}>
          {showPass ? <FaEye />: <FaEyeSlash />}
       </div>
      </div>
      <div className="flex justify-between my-4">
        <div className="flex items-center my-4 text-[#808080]">
          <label className="text-sm"><input type="checkbox" className="mr-2"/> Remember me</label>
        </div>
        <p className="text-center text-sm text-[#808080]">
          <Link to="/forget" className="text-primary cursor-pointer">Forget Password</Link>
        </p>
      </div>
      <button className="w-full bg-primary text-white py-3.5 rounded-full text-sm">Login</button>
      <p className="text-center mt-4 text-sm text-[#808080]">Don’t have account?<Link to="/registration" className="cursor-pointer text-primary">Register</Link></p>
    </div>
  )
}

export default Login