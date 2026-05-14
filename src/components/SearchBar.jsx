import Container from './layout/Container'
import Logo from '../assets/image/Logo.webp'
import React, { Suspense, lazy } from "react";
import { CiSearch } from "react-icons/ci";
import Heart from '../icons/Heart.jsx';
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router';


const SearchBar = () => {
  return (
    <div className="border-b border-solid border-b-gry">
        <Container>
            <div className="flex justify-between my-6">
                <Link to="/">
                    <img src={Logo} alt='logo' fetchPriority='high' loading="lazy"/>
                </Link>
                <div className="relative flex">
                    <input className='border border-[#808080] w-100 py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm border-r-0 rounded-l-md' type='text' placeholder='Search'/>
                    <CiSearch className="absolute top-0 translate-y-1/2 left-4 text-2xl"/>
                    <button className="font-semibold text-sm bg-primary text-white px-6 py-3.5 rounded-r-md">Search</button>
                </div>
                <div className="flex gap-x-8">
                    <div className="relative after:w-px after:h-6 after:content-[''] after:absolute after:top-1.25 after:-right-4 after:bg-[#CCCCCC] gap-2">
                        <Heart/>
                    </div>
                    <div className="flex gap-3">
                        <div className="">
                            <SlHandbag className="text-[34px]"/>
                        </div>
                        <div className="">
                            <span className="text-sm text-[#4D4D4D]">Shopping cart:</span><br/>
                            <span className="font-bold text-md">$57.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default SearchBar