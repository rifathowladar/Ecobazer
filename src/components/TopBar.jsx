import React, { useRef, useState } from "react"
import Container from "./layout/Container"
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import useDropdown from './../hooks/useDropdown';
import { Link } from "react-router";

const TopBar = () => {
    const [eng,setEng] = useState(false)
    const [usd,setUsd] = useState(false)
    const engdropdownRef = useRef(null);
    const usddropdownRef = useRef(null);

    useDropdown(engdropdownRef,()=>setEng(false),eng)
    useDropdown(usddropdownRef,()=>setUsd(false),usd)

  return (
    <div className="border-b border-solid text-grydp text-[10px] sm:text-xs md:text-sm border-b-gry py-1 sm:py-2 md:py-3.75">
        <Container>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2">
                <div className="flex items-center gap-x-0.5 sm:gap-x-1"><CiLocationOn className="text-sm sm:text-base"/>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
                <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-5">
                    <div onClick={() => setEng(!eng)} className="flex items-center gap-x-0.5 relative" ref={engdropdownRef}>
                        Eng <FaAngleDown className="text-xs sm:text-sm"/>
                        {eng &&
                        <div className="absolute top-5 sm:top-6 md:top-9 z-50 bg-gry p-2 sm:p-3">
                            <ul className="space-y-1">
                                <li>Bn</li>
                                <li>CH</li>
                            </ul>
                        </div>
                        }
                    </div>
                    <div onClick={() => setUsd(!usd)} className="flex items-center gap-x-0.5 relative" ref={usddropdownRef}>
                        USD <FaAngleDown className="text-xs sm:text-sm"/>
                        {usd &&
                        <div className="absolute z-50 top-5 sm:top-6 md:top-9 bg-gry p-2 sm:p-3">
                            <ul className="space-y-1">
                                <li>BTN</li>
                                <li>NTD</li>
                            </ul>
                        </div>
                        }
                    </div>
                    <div className="flex items-center relative after:w-px after:h-3 sm:after:h-3.75 after:content-[''] after:absolute after:top-0 after:-left-1.5 sm:after:-left-2.5 after:bg-[#E5E5E5] gap-1 sm:gap-2"><Link to="/login">Sign In</Link>  / <Link to="/registration">Sign Up</Link></div>
                </div>
            </div>
        </Container>
    </div>
  )
}


export default TopBar


