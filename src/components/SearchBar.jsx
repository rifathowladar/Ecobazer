import Container from './layout/Container'
import Logo from '../assets/image/Logo.webp'
import React, { Suspense, lazy } from "react";
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
  return (
    <Container>
        <div className="flex justify-between">
            <div>
                <img src={Logo} alt='logo' fetchPriority='high' loading="lazy"/>
            </div>
            <div className="">
                <input className='border border-gry w-122.25 py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm leading-1 rounded' type='text' placeholder='Search'/>
                <CiSearch className='relative top-7.5 left-4'/>
            </div>
            <div className="">3</div>
        </div>
    </Container>
  )
}

export default SearchBar