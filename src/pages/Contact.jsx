// import React from 'react'
// import Container from '../components/layout/Container'
// import { IoLocationOutline } from "react-icons/io5";


// const Contact = () => {
//   return (
//     <section>
//       <Container>
//         <div className="flex gap-6">
//           <div className="px-5">
//             <div className="text-center">
//               <IoLocationOutline className="text-[#2C742F]" />
//               <address className="w-62.5">2715 Ash Dr. San Jose, South Dakota 83475</address>
//             </div>
//             <div className=""></div>
//             <div className=""></div>
//           </div>
//           <div className=""></div>
//         </div>
//       </Container>
//     </section>
//   )
// }

// export default Contact

import React, { useState } from 'react'
import Container from '../components/layout/Container'
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5"
import { Link } from 'react-router'

const Contact = () => {

  return (
    <section className="">
      <Container>
        <div className="flex flex-col md:flex-row gap-6 my-20">
          {/* Left info card */}
          <div className="bg-white rounded-lg shadow-sm px-5 py-10 md:w-72 flex flex-col gap-8">
            <div className="text-center flex flex-col items-center">
              <IoLocationOutline className="text-[#2C742F] text-[50px]" />
              <address className="not-italic mt-4 text-sm text-gray-500 leading-relaxed">
                2715 Ash Dr. San Jose, South Dakota 83475
              </address>
            </div>

            <div className="border-t border-gray-100" />

            <div className="text-center flex flex-col items-center">
              <IoMailOutline className="text-[#2C742F] text-[51px]" />
              <Link to="mailto:Proxy@gmail.com" className="mt-4 text-gray-500" >Proxy@gmail.com</Link>
              <Link to="mailto:help.proxy@gmail.com" className="text-gray-500" >Help.proxy@gmail.com</Link>
            </div>

            <div className="border-t border-gray-100" />

            <div className="text-center flex flex-col items-center">
              <IoCallOutline className="text-[#2C742F] text-[50px]" />
              <Link to="tel:2195550114" className="mt-4 text-base text-gray-500">(219) 555-0114</Link>
              <Link to="tel:1643330487" className="text-base text-gray-500">(164) 333-0487</Link>
            </div>
          </div>

          {/* Right form card */}
          <div className="bg-white rounded-lg shadow-sm p-3 lg:p-12.5 flex-1">
            <h3 className="text-2xl font-semibold text-gray-900">Just Say Hello!</h3>
            <p className="text-sm font-normal lg:w-110 text-gray-500 mt-2 mb-6">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Template Cookie"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="zakirsoft@gmail.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-primary transition-colors"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-primary transition-colors"
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none resize-none focus:border-primary transition-colors"
              />

              <button
                type="submit"
                className="w-fit bg-primary hover:bg-[#245F27] text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.0431942719603!2d90.38261086425068!3d23.74121740781062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1785696086684!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact