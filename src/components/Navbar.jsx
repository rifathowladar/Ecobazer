import React, { useRef, useState } from 'react'
import Container from './layout/Container';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
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
  const sidebarRef = useRef(null);
  const [dropdown, setDropdown] = useState("");
  const navRef = useRef(null);

  useDropdown(navRef, () => setDropdown(""), dropdown);
  useDropdown(sidebarRef, () => setSidebar(false), sidebar);
  
  return (
    <div className="bg-[#1A1A1A] text-white">
      <Container>
        <div ref={navRef} className="flex justify-between items-center w-full">
          <div className="flex">
            {/* sidebar */}
            <div className="relative flex">
              <ul onClick={() => setSidebar(true)} className='p-4 bg-primary text-white' ref={sidebarRef}>
                <FaBars className='text-hsize'/>
              </ul>
              {sidebar && (
                  <div className="fixed inset-0 bg-black/40">
                    <div
                      ref={sidebarRef}
                      className="fixed top-0 left-0 h-full w-72 bg-white p-5 duration-1000"
                    >
                      <ul className="space-y-2 text-gray-700">
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
            <div onMouseEnter={()=>setDropdown("categories")} className='flex items-center cursor-pointer bg-[#333333] px-13.5'>
              <span className='flex items-center cursor-pointer gap-4 text-md font-bold hover:text-primary'>
                <Link to ="#">All Categories</Link>
                <FaAngleDown/>
              </span>
                {dropdown === "categories" &&
                  <div className="absolute top-full left-0 mt-1 w-78 bg-white shadow-2xl overflow-hidden z-50">
                    <ul className="space-y-2 text-gray-700">
                      <Link to="#"><li className="categori"><CiApple className="text-2xl"/>Fresh Fruit</li></Link>
                      <Link to="#"><li className="categori"><PiBowlFoodDuotone className="text-2xl"/>Vegetables</li></Link>
                      <Link to="#"><li className="categori"><IoFishOutline className="text-2xl"/>River Fish</li></Link>
                      <Link to="#"><li className="categori"><GiChickenOven className="text-2xl"/>Chicken & Meat</li></Link>
                      <Link to="#"><li className="categori"><RiDrinks2Line className="text-2xl"/>Drink & Water</li></Link>
                      <Link to="#"><li className="categori"><TbIceCream className="text-2xl"/>Yogurt & Ice Cream</li></Link>
                      <Link to="#"><li className="categori"><RiCake3Line className="text-2xl"/>Cake & Bread</li></Link>
                      <Link to="#"><li className="categori"><FaBowlFood className="text-2xl"/>Butter & Cream</li></Link>
                      <Link to="#"><li className="categori"><GiCampCookingPot className="text-2xl"/>Cooking</li></Link>
                      <Link to="#"><li className="categori"><FaPlus className="text-2xl"/>View all Category</li></Link>
                    </ul>
                  </div>
                }
            </div>
            </div>
            <ul className="flex gap-x-8 text-sm items-center relative">
              {/* Home */}
              <li onMouseEnter={()=>setDropdown("home")} className="ml-8">
                <Link className="flex gap-1 items-center hover:text-primary" to="#">Home <FaAngleDown/></Link>
                {dropdown === "home" &&
                  <div className="absolute top-full left-0.5 mt-1 w-22 bg-white rounded shadow-2xl overflow-hidden z-50">
                    <ul className="space-y-2 text-gray-700">
                      <Link to="#"><li className="homedropup">Home 2</li></Link>
                      <Link to="#"><li className="homedropup">Home 2</li></Link>
                    </ul>
                  </div>
                }
              </li>
              <li onMouseEnter={()=> setDropdown("shop")}>
                <Link className="flex gap-1 items-center hover:text-primary" to="#">Shop <FaAngleDown/></Link>
                {dropdown === "shop" &&
                  <div className="absolute top-full left-24 mt-1 w-22 bg-white rounded shadow-2xl overflow-hidden z-50">
                    <ul className="space-y-2 text-gray-700">
                      <Link to="#"><li className="homedropup">Shop 2</li></Link>
                      <Link to="#"><li className="homedropup">Shop 2</li></Link>
                    </ul>
                  </div>
                }
              </li>
              <li onMouseEnter={()=> setDropdown("pages")}>
                <Link className="flex gap-1 items-center hover:text-primary" to="#">Pages <FaAngleDown/></Link>
                {dropdown === "pages" &&
                  <div className="absolute top-full left-48 mt-1 w-20 bg-white rounded shadow-2xl overflow-hidden z-50">
                    <ul className="space-y-2 text-gray-700">
                      <Link to="#"><li className="homedropup">Pages 2</li></Link>
                      <Link to="#"><li className="homedropup">Pages 2</li></Link>
                    </ul>
                  </div>
                }
              </li>
              <li onMouseEnter={()=>setDropdown("blog")} >
                <Link className="flex gap-1 items-center hover:text-primary" to="#">Blog <FaAngleDown/></Link>
                {dropdown === "blog" &&
                  <div className="absolute top-full left-70 mt-1 w-22 bg-white rounded shadow-2xl overflow-hidden z-50">
                    <ul className="space-y-2 text-gray-700">
                      <Link to="#"><li className="homedropup">Blog 2</li></Link>
                      <Link to="#"><li className="homedropup">Blog 2</li></Link>
                    </ul>
                  </div>
                }
              </li>
              <li><Link className='hover:text-primary' to="#">About Us</Link></li>
              <li><Link className='hover:text-primary' to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className=""><Link to="tel:2195550114"><span className='flex text-sm gap-2 hover:text-primary'><FiPhoneCall className='text-2xl'/>(219) 555-0114</span></Link></div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar