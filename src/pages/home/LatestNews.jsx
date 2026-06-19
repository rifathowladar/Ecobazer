import React from 'react'
import Container from '../../components/layout/Container'
import News1 from '../../assets/image/news1.webp'
import News2 from '../../assets/image/news2.webp'
import News3 from '../../assets/image/news3.webp'
import { GoTag } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaRegCommentAlt ,FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router'


const LatestNews = () => {
  return (
    <Container>
        <div className="">
            <h3 className="font-semibold text-hsize text-center">Latest News</h3>
        </div>
        <div className="grid grid-cols-3 gap-6 my-15">
            <div className="shadow-md rounded hover:scale-102 transition duration-300 group">
                <div className="">
                    <img src={News1} className="w-full" alt="News1" />
                </div>
                <div className="m-6">
                    <div className="flex gap-5 text-gray-600 text-base">
                        <h5 className="flex items-center gap-1"><GoTag/>Food</h5>
                        <h5 className="flex items-center gap-1"><CgProfile/>By Admin</h5>
                        <h5 className="flex items-center gap-1"><FaRegCommentAlt/>65 Comments</h5>
                    </div>
                    <h4 className="text-lg text-gray-900 group-hover:text-primary pr-10 pt-2">
                        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                    </h4>
                    <Link to="#">
                        <h5 className="flex gap-2 text-primary pt-5 text-lg items-center">Read More<FaArrowRight/></h5>
                    </Link>
                </div>
            </div>
            <div className="shadow-md rounded hover:scale-102 transition duration-300 group">
                <div className="">
                    <img src={News2} className="w-full" alt="News2" />
                </div>
                <div className="m-6">
                    <div className="flex gap-5 text-gray-600 text-base">
                        <h5 className="flex items-center gap-1"><GoTag/>Food</h5>
                        <h5 className="flex items-center gap-1"><CgProfile/>By Admin</h5>
                        <h5 className="flex items-center gap-1"><FaRegCommentAlt/>65 Comments</h5>
                    </div>
                    <h4 className="text-lg text-gray-900 group-hover:text-primary pr-10 pt-2">
                        Eget lobortis lorem lacinia. Vivamus pharetra semper,
                    </h4>
                    <Link to="#">
                        <h5 className="flex gap-2 text-primary pt-5 text-lg items-center">Read More<FaArrowRight/></h5>
                    </Link>
                </div>
            </div>
            <div className="shadow-md rounded hover:scale-102 transition duration-300 group">
                <div className="">
                    <img src={News3} className="w-full" alt="News3" />
                </div>
                <div className="m-6">
                    <div className="flex gap-5 text-gray-600 text-base">
                        <h5 className="flex items-center gap-1"><GoTag/>Food</h5>
                        <h5 className="flex items-center gap-1"><CgProfile/>By Admin</h5>
                        <h5 className="flex items-center gap-1"><FaRegCommentAlt/>65 Comments</h5>
                    </div>
                    <h4 className="text-lg text-gray-900 group-hover:text-primary pr-10 pt-2">
                        Maecenas blandit risus elementum mauris malesuada.
                    </h4>
                    <Link to="#">
                        <h5 className="flex gap-2 text-primary pt-5 text-lg items-center">Read More<FaArrowRight/></h5>
                    </Link>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default LatestNews