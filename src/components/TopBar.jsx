import React, { useRef } from "react"
import Container from "./layout/Container"
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const TopBar = () => {
    let dropReflan = useRef(null)

    let handleClickLanDrop = (e)=>{
        console.log(e.target);
        
        if (dropReflan.current.style.display == "block") {
            dropReflan.current.style.display = "none"
        }else{
            dropReflan.current.style.display = "block"
        }
    }

  return (
    <div className="border-b border-solid text-grydp text-sm border-b-gry py-3.75">
        <Container>
            <div className="flex justify-between text-grydp">
                <div className="flex items-center gap-x-1"><CiLocationOn/>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
                <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-0.5" onClick={handleClickLanDrop}>Eng <FaAngleDown/></div>
                    <div className="absolute top-9 bg-gry p-3 hidden" ref={dropReflan}>
                        <ul>
                            <li>Bn</li>
                            <li>CH</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-0.5">USD <FaAngleDown/></div>
                    <div className="flex items-center relative after:w-px after:h-3.75 after:content-[''] after:absolute after:top-0 after:-left-2.5 after:bg-[#E5E5E5]">Sign In / Sign Up</div>
                </div>
            </div>
        </Container>
    </div>
  )
}


export default TopBar


