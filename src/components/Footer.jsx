import React from 'react'
import Container from './layout/Container'
import footerlogo from '../assets/image/footer-Logo.webp'
import Payment from '../assets/image/Payment.webp'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] w-full">
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-6 sm:py-8 md:py-10 text-white">
                <div className="sm:col-span-2 lg:col-span-1">
                    <Link to="/"><img src={footerlogo} alt='footerlogo' className="max-w-[150px] sm:max-w-full"/></Link>
                    <p className="max-w-full sm:max-w-84 my-3 sm:my-4 text-xs sm:text-sm text-[#808080]">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className="text-xs sm:text-sm">
                        <Link to="tel:2195550114" className="inline-block mr-1 sm:mr-2 border-b border-primary">(219) 555-0114</Link>
                        <span className="text-[#808080]">or</span>
                        <Link to="mailto:Proxy@gmail.com" className="inline-block ml-1 sm:ml-2 border-b border-primary">Proxy@gmail.com</Link>
                    </div>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm sm:text-md mb-3 sm:mb-5 hover:text-primary">My Account</h5>
                    <ul className="text-xs sm:text-ms text-[#999999] flex flex-col gap-2 sm:gap-3">
                        <Link to="#" className="hover:text-white">My Account</Link>
                        <Link to="#" className="hover:text-white">Order History</Link>
                        <Link to="#" className="hover:text-white">Shoping Cart</Link>
                        <Link to="#" className="hover:text-white">Wishlist</Link>
                    </ul>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm sm:text-md mb-3 sm:mb-5 hover:text-primary">Helps</h5>
                    <ul className="text-xs sm:text-ms text-[#999999] flex flex-col gap-2 sm:gap-3">
                        <Link to="#" className="hover:text-white">Contact</Link>
                        <Link to="#" className="hover:text-white">Faqs</Link>
                        <Link to="#" className="hover:text-white">Terms & Condition</Link>
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                    </ul>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm sm:text-md mb-3 sm:mb-5 hover:text-primary">Proxy</h5>
                    <ul className="text-xs sm:text-ms text-[#999999] flex flex-col gap-2 sm:gap-3">
                        <Link to="#" className="hover:text-white">About</Link>
                        <Link to="#" className="hover:text-white">Shop</Link>
                        <Link to="#" className="hover:text-white">Product</Link>
                        <Link to="#" className="hover:text-white">Track Order</Link>
                    </ul>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm sm:text-md mb-3 sm:mb-5 hover:text-primary">Categories</h5>
                    <ul className="text-xs sm:text-ms text-[#999999] flex flex-col gap-2 sm:gap-3">
                        <Link to="#" className="hover:text-white">Fruit & Vegetables</Link>
                        <Link to="#" className="hover:text-white">Meat & Fish</Link>
                        <Link to="#" className="hover:text-white">Bread & Bakery</Link>
                        <Link to="#" className="hover:text-white">Beauty & Health</Link>
                    </ul>
                </div>
            </div>
            <div className="text-[#808080] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm py-4 sm:py-5 border-t border-[#808080]">
                <div className="">Ecobazar eCommerce © 2021. All Rights Reserved</div>
                <div className="">
                    <img src={Payment} alt='Payment' className="max-w-[200px] sm:max-w-full"/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer