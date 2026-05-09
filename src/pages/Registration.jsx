import React from 'react'
import { Link } from 'react-router'

const Registration = () => {
  return (
    <div className="w-130 bg-white p-6 shadow-md mx-auto my-20">
      <h3 className="font-semibold text-hsize text-center">Create Account</h3>
      <input type="text" placeholder="Full Name" className="fromInput"/>
      <input type="text" placeholder="Email" className="fromInput"/>
      <input type="text" placeholder="Password" className="fromInput"/>
      <input type="text" placeholder="Confirm Password" className="fromInput"/>
      <div className="flex items-center my-4 text-[#808080]">
        <input type="checkbox" className="mr-2"/>
        <label className="text-sm">Accept all terms & Conditions</label>
      </div>
      <button className="w-full bg-primary text-white py-3.5 rounded-full text-sm">Create Account</button>
      <p className="text-center mt-4 text-sm text-[#808080]">Already have account <Link to="/login" className="cursor-pointer text-primary">Login</Link></p>
    </div>
  )
}

export default Registration