import React from 'react'
import Container from '../components/layout/Container'
import error from "../assets/image/error.webp"
import { Link } from 'react-router'

const Error = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-center items-center my-8 lg:my-20">
          <img src={error} alt='Error' />
          <div className="text-center">
            <h2 className="text-2xl lg:text-[40px] font-semibold mt-8">Oops! page not found</h2>
            <p className="lg:w-[500px] text-sm lg:text-[16px] font-medium text-gray-500 mt-5 mb-6">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
            <Link to="/" className="bg-primary py-3.5 px-8 text-sm font-semibold rounded-full text-white ">Back to Home</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Error