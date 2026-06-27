import React from 'react'
import Container from '../../components/layout/Container'
import Banner1 from '../../assets/image/Banner3.webp'
import { FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const ProductShowcase = ({ allData,
    title,
    link,
    showViewAll = true ,
    hover = false, }) => {

    function star(count) {
        let halfStar = count.toString().split('.')[1]
        let index = Math.floor(count)
        let arr = []
        for (let i = 1; i <= 5; i++) {
            if (i <= count) arr.push("color")
            else arr.push(i)
        }
        if (halfStar) arr[index] = "half"
        return arr
    }

    // ধরে নিচ্ছি প্রতি row তে 6 টা item (max-w-[15.3%])
    const itemsPerRow = 6;

    return (
        <Container>
            {/* overflow-hidden দিলে popup section এর বাইরে যাবে না */}
            <div className="overflow-hidden">
                <div className="flex justify-between mb-8 mt-15">
                    <h2 className="text-hsize font-semibold">{title}</h2>
                    {showViewAll && (
                        <Link to={link} className="text-primary flex gap-3 text-base font-medium">
                            View All <FaArrowRight />
                        </Link>
                    )}
                </div>

                <div className="flex gap-5 flex-wrap mb-15">
                    {allData.map((item, idx) => {
                        // row এর শেষ দিকের item হলে popup বাম দিকে খুলবে
                        const positionInRow = idx % itemsPerRow;
                        const isNearRightEdge = positionInRow >= itemsPerRow - 2;

                        // নিচের row হলে popup উপরের দিকে খুলবে
                        const rowIndex = Math.floor(idx / itemsPerRow);
                        const lastRowIndex = Math.floor((allData.length - 1) / itemsPerRow);
                        const isBottomRow = rowIndex > 0 && rowIndex === lastRowIndex;

                        return (
                            <div
                                key={idx}
                                className="max-w-[15.3%] border border-gry hover:border-primary hover:text-primary p-6 rounded-md relative group"
                            >
                                <img src={Banner1} alt='banner' />
                                {item.price
                                    ? <h3 className='pt-4'>{(item.name || item.title).slice(0, 16)}...</h3>
                                    : <h3 className='pt-4'>{item.name || item.title}</h3>}
                                <p>{item.price && item.price}</p>
                                <p>{item.rating && item.rating}</p>
                                <div className="flex">
                                    {item.rating && star(item.rating).map((s, i) => (
                                        s === "color"
                                            ? <FaStar key={i} className="text-yellow-400" />
                                            : s === 'half'
                                                ? <FaStarHalfAlt key={i} className="text-yellow-400" />
                                                : <FaStar key={i} className="text-gry" />
                                    ))}
                                </div>

                                {/* Popup: edge এর কাছে হলে বাম দিকে, নাহলে ডানে; নিচের row হলে উপরে */}
                                {hover && (
                                <div
                                    className={`w-[210%] h-133.5 rounded-md bg-white absolute m-2 hidden group-hover:block duration-300 z-20 shadow-lg p-4 ${
                                    isNearRightEdge ? "right-[-7px]" : "left-[-7px]"
                                    } ${isBottomRow ? "bottom-[-7px]" : "top-[-7px]"}`}
                                >
                                    <img src={Banner1} alt="" />

                                    <h3 className="pt-4 text-lg font-medium">
                                    {item.name || item.title}
                                    </h3>

                                    <p className="text-primary font-semibold">${item.price}</p>

                                    <div className="flex mt-2">
                                    {item.rating &&
                                        star(item.rating).map((s, i) =>
                                        s === "color" ? (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ) : s === "half" ? (
                                            <FaStarHalfAlt key={i} className="text-yellow-400" />
                                        ) : (
                                            <FaStar key={i} className="text-gray-300" />
                                        )
                                        )}
                                    </div>
                                </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default ProductShowcase
