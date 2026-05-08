import React from 'react'
import { useSelector } from 'react-redux'
import Hw from './Hw'

const Home = () => {
    let data = useSelector(state=> console.log(state))
  return (
    <div>
      Home
      {/* <Hw/> */}
    </div>
  )
}

export default Home







