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
    <div className="border-b border-solid text-grydp text-sm border-b-gry py-3.75">
        <Container>
            <div className="flex justify-between text-grydp">
                <div className="flex items-center gap-x-1"><CiLocationOn/>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
                <div className="flex gap-x-5">
                    <div onClick={() => setEng(!eng)} className="flex items-center gap-x-0.5" ref={engdropdownRef}>
                        Eng <FaAngleDown/>
                        {eng &&
                        <div className="absolute top-9 bg-gry p-3">
                            <ul>
                                <li>Bn</li>
                                <li>CH</li>
                            </ul>
                        </div>
                        }
                    </div>
                    <div onClick={() => setUsd(!usd)} className="flex items-center gap-x-0.5" ref={usddropdownRef}>
                        USD <FaAngleDown/>
                        {usd &&
                        <div className="absolute top-9 bg-gry p-3">
                            <ul>
                                <li>BTN</li>
                                <li>NTD</li>
                            </ul>
                        </div>
                        }
                    </div>
                    <div className="flex items-center relative after:w-px after:h-3.75 after:content-[''] after:absolute after:top-0 after:-left-2.5 after:bg-[#E5E5E5] gap-2"><Link to="/login">Sign In</Link>  / <Link to="/registration">Sign Up</Link></div>
                </div>
            </div>
        </Container>
    </div>
  )
}


export default TopBar


