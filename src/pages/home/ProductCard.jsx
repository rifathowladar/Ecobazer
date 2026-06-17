import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = ({ item }) => {
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
    <div className="border border-gray-200 p-4 relative group bg-white hover:border-primary transition-colors duration-300">
      {/* Sale Badge */}
      {item.discountPercentage > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Sale {Math.round(item.discountPercentage)}%
        </span>
      )}

      {/* Hover Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
          <CiHeart />
        </button>

        <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
          <LuEye />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="max-h-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
        {item.title}
        </h3>

        <div className="flex items-center gap-1 mt-2">
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

        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="font-semibold text-gray-900">
              ${item.price}
            </span>

            {item.discountPercentage > 0 && (
              <span className="ml-2 text-xs text-gray-400 line-through">
                $
                {(
                  item.price +
                  (item.price *
                    item.discountPercentage) /
                    100
                ).toFixed(0)}
              </span>
            )}
          </div>

          <button className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-green-500 group-hover:text-white flex items-center justify-center transition">
            <HiOutlineShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;