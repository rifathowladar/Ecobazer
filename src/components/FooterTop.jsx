import React from 'react'
import Container from './layout/Container'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const FooterTop = () => {
  return (
    <div className="bg-[#F7F7F7] w-full py-10">
        <Container>
            <div className="flex justify-between">
                <div className="">
                    <h5 className="font-semibold text-2xl">Subcribe our Newsletter</h5>
                    <p className="max-w-md text-sm text-[#999999] mt-1">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="flex">
                    <div className="relative">
                        <input className='border bg-white border-[#808080] border-r-0 w-100 py-3 pl-11  placeholder:text-[#808080] placeholder:text-sm rounded-tl-full rounded-bl-full outline-none' type='text' placeholder='Your email address'/>
                        <button className="font-semibold text-sm bg-primary text-white px-10 py-4 relative top-[-2px] left-[-20px] rounded-full">Subscribe</button>
                    </div>
                    <div className="flex gap-4 ml-4">
                        <Link to="" className="footerIcon"><FaFacebookF className="text-lg"/></Link>
                        <Link to="" className="footerIcon"><FaTwitter className="text-lg"/></Link>
                        <Link to="" className="footerIcon"><FaPinterestP className="text-lg"/></Link>
                        <Link to="" className="footerIcon"><FaInstagram className="text-lg"/></Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterTop