import React from 'react'
import Container from '../../components/layout/Container'
import Banner1 from '../../assets/image/Banner3.webp'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
import { FaStar , FaStarHalfAlt } from "react-icons/fa";

const ProductShowcase = ({ allData, title , link ,showViewAll = true, }) => {

    function star(count) {
        let halfStar = count.toString().split('.')[1]
        let index = Math.floor(count)
        let arr = []
        for (let i = 1; i <= 5; i++) {
            if (i <= count) {
                arr.push("color")
            } else {
                arr.push(i)
            }
        }
        if (halfStar) {
            arr[index] = "half"
        }
        return arr
    }
  return (
    <Container>
        <div className="flex justify-between mb-8 mt-15">
            <h2 className="text-hsize font-semibold">{title}</h2>
            {showViewAll && ( <Link to={link} className="text-primary flex gap-3 text-base font-medium">View All <FaArrowRight /></Link>  )}
        </div>
        <div className="flex gap-5 flex-wrap mb-15">
            {allData.map(item=>(
                <div className="max-w-[15.3%] border border-gry hover:border-primary hover:text-primary p-6 rounded-md">
                    <img src={Banner1} alt='banner' />
                    {item.price ?
                    <h3 className='pt-4'>{(item.name || item.title).slice(0, 16)}...</h3>
                    :
                    <h3 className='pt-4'>{item.name || item.title}</h3>
                    }
                    <p>{item.price && item.price}</p>
                    <p>{item.rating && item.rating}</p>
                    <div className="flex">
                        {item.rating && star(item.rating).map(item =>(
                            item == "color"
                                ?
                                <FaStar className="text-yellow-400" />
                                :
                                item == 'half' ?
                                    <FaStarHalfAlt className="text-yellow-400"/>
                                    :
                                    <FaStar className="text-gry"/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default ProductShowcase