import {
  FaHeart,
  FaRegHeart,
  FaShoppingBag,
  FaRegEye,
} from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product, isWishlist, onWishlist }) => {

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

  const discountPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-primary">

      {/* Hover Actions */}
      <div className="absolute right-3 top-3 z-10 flex translate-x-3 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">

        {/* Wishlist */}
        <button
          onClick={() => onWishlist(product.id)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-primary hover:text-primary"
        >
          {isWishlist ? (
            <FaHeart className="text-primary" size={14} />
          ) : (
            <FaRegHeart size={14} />
          )}
        </button>

        {/* Eye */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-primary hover:text-primary"
        >
          <FaRegEye size={15} />
        </button>

      </div>

      {/* Product Image */}
      <div className="flex h-52 items-center justify-center bg-white p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="relative border-t border-gray-100 p-4">

        {/* Product Name */}
        <h3 className="truncate group-hover:text-primary pr-8 text-sm font-medium text-gray-700">
          {product.title}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold text-gray-900">
            ${discountPrice.toFixed(2)}
          </span>

          {product.discountPercentage > 0 && (
            <span className="text-xs text-gray-400 line-through">
              ${product.price}
            </span>
          )}
        </div>

        {/* Rating */}
        <div
                  className="flex gap-1 mt-3"
                >
                  {product.rating &&
                    star(product.rating).map((value, index) =>
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

        {/* Cart */}
        <button
            className="absolute bottom-4 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition duration-300 group-hover:bg-primary group-hover:text-white"
            >
            <FaShoppingBag size={14} />
        </button>

      </div>
    </div>
  );
};

export default ProductCard;