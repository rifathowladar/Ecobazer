import React from 'react'
import Container from './layout/Container'
import footerlogo from '../assets/image/footer-Logo.webp'
import Payment from '../assets/image/Payment.webp'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] w-full">
        <Container>
            <div className="flex justify-between items-center py-10 text-white">
                <div className="">
                    <Link to="/"><img src={footerlogo} alt='footerlogo' /></Link>
                    <p className="max-w-84 my-4 text-[#808080]">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className="">
                        <Link to="tel:2195550114" className="inline-block mr-2 border-b border-primary">(219) 555-0114</Link>
                        <span className="text-[#808080]">or</span>
                        <Link to="mailto:Proxy@gmail.com" className="inline-block ml-2 border-b border-primary">Proxy@gmail.com</Link>
                    </div>
                </div>
                <div className="">
                    <h5 className="font-medium text-md mb-5 hover:text-primary">My Account</h5>
                    <ul className="text-ms text-[#999999] flex flex-col gap-3">
                        <Link to="#" className="hover:text-white">My Account</Link>
                        <Link to="#" className="hover:text-white">Order History</Link>
                        <Link to="#" className="hover:text-white">Shoping Cart</Link>
                        <Link to="#" className="hover:text-white">Wishlist</Link>
                    </ul>
                </div>
                <div className="">
                    <h5 className="font-medium text-md mb-5 hover:text-primary">Helps</h5>
                    <ul className="text-ms text-[#999999] flex flex-col gap-3">
                        <Link to="#" className="hover:text-white">Contact</Link>
                        <Link to="#" className="hover:text-white">Faqs</Link>
                        <Link to="#" className="hover:text-white">Terms & Condition</Link>
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                    </ul>
                </div>
                <div className="">
                    <h5 className="font-medium text-md mb-5 hover:text-primary">Proxy</h5>
                    <ul className="text-ms text-[#999999] flex flex-col gap-3">
                        <Link to="#" className="hover:text-white">About</Link>
                        <Link to="#" className="hover:text-white">Shop</Link>
                        <Link to="#" className="hover:text-white">Product</Link>
                        <Link to="#" className="hover:text-white">Track Order</Link>
                    </ul>
                </div>
                <div className="">
                    <h5 className="font-medium text-md mb-5 hover:text-primary">Categories</h5>
                    <ul className="text-ms text-[#999999] flex flex-col gap-3">
                        <Link to="#" className="hover:text-white">Fruit & Vegetables</Link>
                        <Link to="#" className="hover:text-white">Meat & Fish</Link>
                        <Link to="#" className="hover:text-white">Bread & Bakery</Link>
                        <Link to="#" className="hover:text-white">Beauty & Health</Link>
                    </ul>
                </div>
            </div>
            <div className="text-[#808080] flex justify-between text-sm py-5 border-t border-[#808080]">
                <div className="">Ecobazar eCommerce © 2021. All Rights Reserved</div>
                <div className="">
                    <img src={Payment} alt='Payment'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer