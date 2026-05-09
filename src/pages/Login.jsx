import React from 'react'
import { Link } from 'react-router'
import Forgot from './Forgot';

const Login = () => {
  return (
    <div className="w-130 bg-white p-6 shadow-md mx-auto my-20">
      <h3 className="font-semibold text-hsize text-center">Create Account</h3>
      <input type="text" placeholder="Email" className="fromInput"/>
      <input type="text" placeholder="Password" className="fromInput"/>
      <div className="flex justify-between my-4">
        <div className="flex items-center my-4 text-[#808080]">
          <input type="checkbox" className="mr-2"/>
          <label className="text-sm">Remember me</label>
        </div>
        <p className="text-center text-sm text-[#808080]">
          <Link to="/forget-password" className="text-primary cursor-pointer">Forget Password</Link>
        </p>
      </div>
      <button className="w-full bg-primary text-white py-3.5 rounded-full text-sm">Login</button>
      <p className="text-center mt-4 text-sm text-[#808080]">Don’t have account?<Link to="/registration" className="cursor-pointer text-primary">Register</Link></p>
    </div>
  )
}

export default Login