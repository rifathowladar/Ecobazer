import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useCountdown from "../../hooks/useCountdown";

const ProductCard = ({ item, featured = false }) => {
  const time = useCountdown("2026-8-31");

  function star(count) {
    const halfStar = count.toString().split(".")[1];
    const index = Math.floor(count);
    let arr = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        arr.push("color");
      } else {
        arr.push(i);
      }
    }

    if (halfStar) {
      arr[index] = "half";
    }

    return arr;
  }

  return (
    <div
      className={`group relative bg-white border transition-all duration-300 hover:border-primary
      ${
        featured
          ? "border-gray-200 p-6 h-full flex flex-col"
          : "border-gray-200 p-4 h-full flex flex-col"
      }`}
    >
      {/* Sale Badge */}

      {item.discountPercentage > 0 && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
          Sale {Math.round(item.discountPercentage)}%
        </span>
      )}

      {/* Image */}

      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className={`object-contain transition duration-300 group-hover:scale-105
            ${
              featured
                ? "w-full h-[330px]"
                : "w-full h-[180px]"
            }`}
        />
      </div>

      {/* Icons */}

      {featured ? (
        <div className="flex items-center gap-4 mt-5">
          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition">
            <CiHeart size={24} />
          </button>

          <button className="flex-1 h-12 rounded-full bg-primary text-white flex items-center justify-center gap-2 font-semibold">
            Add to Cart
            <HiOutlineShoppingBag size={20} />
          </button>

          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition">
            <LuEye size={22} />
          </button>
        </div>
      ) : (
        <>
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
            <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
              <CiHeart />
            </button>

            <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
              <LuEye />
            </button>
          </div>
        </>
      )}

      {/* Product Info */}

      <div className={`mt-5 ${featured ? "text-center" : ""}`}>
        <h3
          className={`font-medium group-hover:text-primary transition
          ${featured ? "text-3xl" : "text-sm"}`}
        >
          {item.title}
        </h3>

        <div
          className={`flex gap-1 mt-3 ${
            featured ? "justify-center" : ""
          }`}
        >
          {item.rating &&
            star(item.rating).map((value, index) =>
              value === "color" ? (
                <FaStar key={index} className="text-yellow-400" />
              ) : value === "half" ? (
                <FaStarHalfAlt
                  key={index}
                  className="text-yellow-400"
                />
              ) : (
                <FaStar
                  key={index}
                  className="text-gray-300"
                />
              )
            )}
        </div>
                {/* Price */}

        <div
          className={`mt-4 ${
            featured
              ? "flex justify-center items-center gap-3"
              : "flex items-center justify-between"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-bold text-gray-900 ${
                featured ? "text-4xl" : "text-lg"
              }`}
            >
              ${item.price}
            </span>

            {item.discountPercentage > 0 && (
              <span
                className={`line-through text-gray-400 ${
                  featured ? "text-2xl" : "text-sm"
                }`}
              >
                $
                {(
                  item.price +
                  (item.price * item.discountPercentage) / 100
                ).toFixed(0)}
              </span>
            )}
          </div>

          {!featured && (
            <button className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition">
              <HiOutlineShoppingBag />
            </button>
          )}
        </div>

        {/* Featured Feedback */}

        {featured && (
          <>
            <p className="mt-3 text-gray-500">
              (524 Feedback)
            </p>

            <div className="mt-6">
              <p className="text-gray-500 text-lg">
                Hurry up! Offer ends in:
              </p>

              <div className="flex justify-center gap-8 mt-5">

                <div className="text-center">
                  <h2 className="text-3xl font-bold">
                    {String(time.days).padStart(2, "0")}
                  </h2>
                  <span className="text-xs text-gray-500">
                    DAYS
                  </span>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold">
                    {String(time.hours).padStart(2, "0")}
                  </h2>
                  <span className="text-xs text-gray-500">
                    HOURS
                  </span>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold">
                    {String(time.minutes).padStart(2, "0")}
                  </h2>
                  <span className="text-xs text-gray-500">
                    MINS
                  </span>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold">
                    {String(time.seconds).padStart(2, "0")}
                  </h2>
                  <span className="text-xs text-gray-500">
                    SECS
                  </span>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;