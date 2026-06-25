import React, { useRef, useState } from 'react'
import Container from './layout/Container';
import { Link } from 'react-router';
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import useDropdown from '../hooks/useDropdown';
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import { LuRefreshCw } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CiApple } from "react-icons/ci";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { IoFishOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { TbIceCream } from "react-icons/tb";
import { RiCake3Line } from "react-icons/ri";
import { GiCampCookingPot } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const sidebarRef = useRef(null);
  const [dropdown, setDropdown] = useState("");
  const [mobileDropdown, setMobileDropdown] = useState("");
  const navRef = useRef(null);

  useDropdown(navRef, () => setDropdown(""), dropdown);
  useDropdown(sidebarRef, () => setSidebar(false), sidebar);
  
  return (
    <div className="bg-[#1A1A1A] text-white">
      <Container>
        <div ref={navRef} className="flex justify-between items-center w-full py-2 sm:py-3">
          <div className="flex items-center">
            {/* sidebar */}
            <div className="relative flex">
              <ul onClick={() => setSidebar(true)} className='p-2 sm:p-3 md:p-4 bg-primary text-white' ref={sidebarRef}>
                <FaBars className='text-lg sm:text-xl md:text-hsize'/>
              </ul>
              {sidebar && (
                  <div className="fixed inset-0 bg-black/40 z-50">
                    <div
                      ref={sidebarRef}
                      className="fixed top-0 left-0 h-full w-64 sm:w-72 bg-white p-4 sm:p-5"
                    >
                      <ul className="space-y-1.5 text-gray-700">
                        <Link to="#"><li className="sidebar"><MdDashboard/>Dashboard</li></Link>
                        <Link to="#"><li className="sidebar"><LuRefreshCw/>Order History</li></Link>
                        <Link to="#"><li className="sidebar"><FaRegHeart/> Wishlist</li></Link>
                        <Link to="#"><li className="sidebar"><SlHandbag/>Shopping Cart</li></Link>
                        <Link to="#"><li className="sidebar"><MdOutlineSettings/>Settings</li></Link>
                        <Link to="#"><li className="sidebar"><LuLogOut/>Log-out</li></Link>
                      </ul>
                    </div>
                  </div>
                )}
                {/* Categories */}
            <div onMouseEnter={()=>setDropdown("categories")} onMouseLeave={() => setDropdown("")} className='hidden md:flex items-center cursor-pointer bg-[#333333] px-3 md:px-4 lg:px-13.5'>
              <span className='flex items-center cursor-pointer gap-1.5 md:gap-2 lg:gap-4 text-xs md:text-sm lg:text-md font-bold hover:text-primary'>
                <Link to ="#">All Categories</Link>
                <FaAngleDown className="text-xs md:text-sm"/>
              </span>
                {dropdown === "categories" &&
                  <div className="absolute top-full left-0 mt-1 w-78 bg-white shadow-2xl overflow-hidden z-50">
                    <ul className="space-y-1.5 text-gray-700">
                      <Link to="#"><li className="categori"><CiApple className="text-xl md:text-2xl"/>Fresh Fruit</li></Link>
                      <Link to="#"><li className="categori"><PiBowlFoodDuotone className="text-xl md:text-2xl"/>Vegetables</li></Link>
                      <Link to="#"><li className="categori"><IoFishOutline className="text-xl md:text-2xl"/>River Fish</li></Link>
                      <Link to="#"><li className="categori"><GiChickenOven className="text-xl md:text-2xl"/>Chicken & Meat</li></Link>
                      <Link to="#"><li className="categori"><RiDrinks2Line className="text-xl md:text-2xl"/>Drink & Water</li></Link>
                      <Link to="#"><li className="categori"><TbIceCream className="text-xl md:text-2xl"/>Yogurt & Ice Cream</li></Link>
                      <Link to="#"><li className="categori"><RiCake3Line className="text-xl md:text-2xl"/>Cake & Bread</li></Link>
                      <Link to="#"><li className="categori"><FaBowlFood className="text-xl md:text-2xl"/>Butter & Cream</li></Link>
                      <Link to="#"><li className="categori"><GiCampCookingPot className="text-xl md:text-2xl"/>Cooking</li></Link>
                      <Link to="#"><li className="categori"><FaPlus className="text-xl md:text-2xl"/>View all Category</li></Link>
                    </ul>
                  </div>
                }
            </div>
            </div>
            <ul className="hidden md:flex gap-x-3 md:gap-x-4 lg:gap-x-8 text-xs md:text-sm items-center relative">
              {/* Home */}
              <li
                onMouseEnter={() => setDropdown("home")}
                onMouseLeave={() => setDropdown("")}
                className="ml-3 md:ml-4 lg:ml-8 relative"
              >
                <Link className="flex gap-1 items-center hover:text-primary" to="#">
                  Home <FaAngleDown className="text-xs md:text-sm"/>
                </Link>

                {dropdown === "home" && (
                  <div className="absolute top-full left-0 pt-4.5 md:pt-5.5 z-50">
                    <div className="w-20 md:w-22 bg-white rounded shadow-2xl overflow-hidden">
                      <ul className="space-y-1.5 text-gray-700">
                        <Link to="#"><li className="homedropup">Home 2</li></Link>
                        <Link to="#"><li className="homedropup">Home 2</li></Link>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* Shop */}
              <li
                onMouseEnter={() => setDropdown("shop")}
                onMouseLeave={() => setDropdown("")}
                className="relative"
              >
                <Link className="flex gap-1 items-center hover:text-primary" to="#">
                  Shop <FaAngleDown className="text-xs md:text-sm"/>
                </Link>

                {dropdown === "shop" && (
                  <div className="absolute top-full left-0 pt-4.5 md:pt-5.5 z-50">
                    <div className="w-20 md:w-22 bg-white rounded shadow-2xl overflow-hidden">
                      <ul className="space-y-1.5 text-gray-700">
                        <Link to="#"><li className="homedropup">Shop 2</li></Link>
                        <Link to="#"><li className="homedropup">Shop 2</li></Link>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* Pages */}
              <li
                onMouseEnter={() => setDropdown("pages")}
                onMouseLeave={() => setDropdown("")}
                className="relative"
              >
                <Link className="flex gap-1 items-center hover:text-primary" to="#">
                  Pages <FaAngleDown className="text-xs md:text-sm"/>
                </Link>

                {dropdown === "pages" && (
                  <div className="absolute top-full left-0 pt-4.5 md:pt-5.5 z-50">
                    <div className="w-18 md:w-20 bg-white rounded shadow-2xl overflow-hidden">
                      <ul className="space-y-1.5 text-gray-700">
                        <Link to="#"><li className="homedropup">Pages 2</li></Link>
                        <Link to="#"><li className="homedropup">Pages 2</li></Link>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* Blog */}
              <li
                onMouseEnter={() => setDropdown("blog")}
                onMouseLeave={() => setDropdown("")}
                className="relative"
              >
                <Link className="flex gap-1 items-center hover:text-primary" to="#">
                  Blog <FaAngleDown className="text-xs md:text-sm"/>
                </Link>

                {dropdown === "blog" && (
                  <div className="absolute top-full left-0 pt-4.5 md:pt-5.5 z-50">
                    <div className="w-20 md:w-22 bg-white rounded shadow-2xl overflow-hidden">
                      <ul className="space-y-1.5 text-gray-700">
                        <Link to="#"><li className="homedropup">Blog 2</li></Link>
                        <Link to="#"><li className="homedropup">Blog 2</li></Link>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li><Link className='hover:text-primary' to="#">About Us</Link></li>
              <li><Link className='hover:text-primary' to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className="hidden md:block"><Link to="tel:2195550114"><span className='flex text-xs md:text-sm gap-1.5 md:gap-2 hover:text-primary'><FiPhoneCall className='text-lg md:text-2xl'/> (219) 555-0114</span></Link></div>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-xl sm:text-2xl">
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden py-3 sm:py-4 border-t border-gray-700">
            <ul className="space-y-2 sm:space-y-3">
              <li className="p-1.5 sm:p-2">
                <button onClick={() => setMobileDropdown(mobileDropdown === "categories" ? "" : "categories")} className="flex items-center justify-between w-full hover:text-primary">
                  All Categories <FaAngleDown className="text-sm"/>
                </button>
                {mobileDropdown === "categories" && (
                  <ul className="pl-3 sm:pl-4 mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2 text-gray-300 text-sm">
                    <Link to="#"><li className="py-1.5 sm:py-2"><CiApple className="inline mr-1.5 sm:mr-2 text-lg"/>Fresh Fruit</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><PiBowlFoodDuotone className="inline mr-1.5 sm:mr-2 text-lg"/>Vegetables</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><IoFishOutline className="inline mr-1.5 sm:mr-2 text-lg"/>River Fish</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><GiChickenOven className="inline mr-1.5 sm:mr-2 text-lg"/>Chicken & Meat</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><RiDrinks2Line className="inline mr-1.5 sm:mr-2 text-lg"/>Drink & Water</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><TbIceCream className="inline mr-1.5 sm:mr-2 text-lg"/>Yogurt & Ice Cream</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><RiCake3Line className="inline mr-1.5 sm:mr-2 text-lg"/>Cake & Bread</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><FaBowlFood className="inline mr-1.5 sm:mr-2 text-lg"/>Butter & Cream</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><GiCampCookingPot className="inline mr-1.5 sm:mr-2 text-lg"/>Cooking</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2"><FaPlus className="inline mr-1.5 sm:mr-2 text-lg"/>View all Category</li></Link>
                  </ul>
                )}
              </li>
              <li className="p-1.5 sm:p-2">
                <button onClick={() => setMobileDropdown(mobileDropdown === "home" ? "" : "home")} className="flex items-center justify-between w-full hover:text-primary">
                  Home <FaAngleDown className="text-sm"/>
                </button>
                {mobileDropdown === "home" && (
                  <ul className="pl-3 sm:pl-4 mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2 text-gray-300 text-sm">
                    <Link to="#"><li className="py-1.5 sm:py-2">Home 2</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2">Home 2</li></Link>
                  </ul>
                )}
              </li>
              <li className="p-1.5 sm:p-2">
                <button onClick={() => setMobileDropdown(mobileDropdown === "shop" ? "" : "shop")} className="flex items-center justify-between w-full hover:text-primary">
                  Shop <FaAngleDown className="text-sm"/>
                </button>
                {mobileDropdown === "shop" && (
                  <ul className="pl-3 sm:pl-4 mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2 text-gray-300 text-sm">
                    <Link to="#"><li className="py-1.5 sm:py-2">Shop 2</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2">Shop 2</li></Link>
                  </ul>
                )}
              </li>
              <li className="p-1.5 sm:p-2">
                <button onClick={() => setMobileDropdown(mobileDropdown === "pages" ? "" : "pages")} className="flex items-center justify-between w-full hover:text-primary">
                  Pages <FaAngleDown className="text-sm"/>
                </button>
                {mobileDropdown === "pages" && (
                  <ul className="pl-3 sm:pl-4 mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2 text-gray-300 text-sm">
                    <Link to="#"><li className="py-1.5 sm:py-2">Pages 2</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2">Pages 2</li></Link>
                  </ul>
                )}
              </li>
              <li className="p-1.5 sm:p-2">
                <button onClick={() => setMobileDropdown(mobileDropdown === "blog" ? "" : "blog")} className="flex items-center justify-between w-full hover:text-primary">
                  Blog <FaAngleDown className="text-sm"/>
                </button>
                {mobileDropdown === "blog" && (
                  <ul className="pl-3 sm:pl-4 mt-1.5 sm:mt-2 space-y-1.5 sm:space-y-2 text-gray-300 text-sm">
                    <Link to="#"><li className="py-1.5 sm:py-2">Blog 2</li></Link>
                    <Link to="#"><li className="py-1.5 sm:py-2">Blog 2</li></Link>
                  </ul>
                )}
              </li>
              <li className="p-1.5 sm:p-2"><Link className='hover:text-primary' to="#">About Us</Link></li>
              <li className="p-1.5 sm:p-2"><Link className='hover:text-primary' to="#">Contact Us</Link></li>
              <li className="p-1.5 sm:p-2"><Link to="tel:2195550114"><span className='flex text-sm gap-1.5 md:gap-2 hover:text-primary'><FiPhoneCall className='text-lg sm:text-xl'/> (219) 555-0114</span></Link></li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Navbar