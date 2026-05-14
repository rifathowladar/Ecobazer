import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Registration = () => {
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  })
  let handleChange = (e)=>{
    console.log(e.target.name, e.target.value);
    let name = e.target.name
    let value = e.target.value
    if(name !== 'terms'){
      setRegData({...regData, [name]:value})
    }else{
      setRegData({...regData, terms: !regData.terms})
      {}
    }
  }
  let handleClick = async ()=>{
    let date = await axios.post("http://localhost:5000/registration",regData);
    console.log(date);
    
  }


  return (
    <div className="w-130 bg-white p-6 shadow-md rounded-lg mx-auto my-20">
      <h3 className="font-semibold text-hsize text-center">Create Account</h3>
      <input onChange={handleChange} name='email' type="email" placeholder="Email" className="fromInput"/>
      <input onChange={handleChange} name='password' type="password" placeholder="Password" className="fromInput"/>
      <input onChange={handleChange} name='confirmPassword' type="password" placeholder="Confirm Password" className="fromInput"/>
      <div className="flex items-center my-4 text-[#808080]">
        <label className="text-sm"><input onChange={handleChange} name='terms' type="checkbox" className="mr-2"/>Accept all terms & Conditions</label>
      </div>
      <button onClick={handleClick} className="w-full bg-primary text-white py-3.5 rounded-full text-sm">Create Account</button>
      <p className="text-center mt-4 text-sm text-[#808080]">Already have account <Link to="/login" className="cursor-pointer text-primary">Login</Link></p>
    </div>
  )
}

export default Registration