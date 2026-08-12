import React, { useState } from "react";
import Container from "../components/layout/Container";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaXmark,
} from "react-icons/fa6";

import greencapsicum from "../assets/image/greencapsicum.webp";
import redcapsicum from "../assets/image/redcapsicum.webp";
import mango from "../assets/image/mango.webp";
import { Link } from "react-router";

const initialItems = [
  {
    id: 1,
    name: "Green Capsicum",
    price: 14.99,
    oldPrice: 20.99,
    inStock: true,
    image: greencapsicum,
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    price: 45.0,
    oldPrice: null,
    inStock: true,
    image: redcapsicum,
  },
  {
    id: 3,
    name: "Fresh Sujapuri Mango",
    price: 9.0,
    oldPrice: null,
    inStock: false,
    image: mango,
  },
];

const Wishlist = () => {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <div className="mt-6 sm:mt-10 mb-10 sm:mb-20 px-2 sm:px-0">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          My Wishlist
        </h1>
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          {/* Header - hide on mobile */}
          <div className="hidden md:grid grid-cols-4 px-4 sm:px-6 py-3 sm:py-4 text-xs uppercase tracking-wide text-gray-400 border-b border-gray-100">
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span>Stock Status</span>
          </div>

          {/* Wishlist Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="md:grid md:grid-cols-4 md:items-center px-4 sm:px-6 py-4 border-b last:border-b-0 border-gray-100"
            >
              {/* Product */}
              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 md:gap-3 mb-3 md:mb-0">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <span className="font-medium text-sm sm:text-base">{item.name}</span>
                </div>
                <div className="sm:hidden flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-gray-500">Price:</span>
                  <span className="font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through text-xs">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Price - desktop only */}
              <div className="hidden md:block">
                <span className="font-semibold text-sm sm:text-base">
                  ${item.price.toFixed(2)}
                </span>

                {item.oldPrice && (
                  <span className="ml-2 text-gray-400 line-through text-sm">
                    ${item.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock + Cart + Remove */}
              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
                  <div className="sm:hidden flex items-center justify-between w-full">
                    <span className="text-xs text-gray-500">Stock:</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.inStock
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <span
                    className={`hidden sm:inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.inStock
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>

                  <button
                    disabled={!item.inStock}
                    className={`w-full sm:w-auto px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium ${
                      item.inStock
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 self-end md:self-auto flex-shrink-0"
                >
                  <FaXmark size={13} />
                </button>
              </div>
            </div>
          ))}

          {/* Share */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4">
            <span className="text-xs sm:text-sm text-gray-500">Share:</span>
            <Link to="#" className="footerIcon"><FaFacebookF className="text-sm sm:text-base"/></Link>
            <Link to="#" className="footerIcon"><FaTwitter className="text-sm sm:text-base"/></Link>
            <Link to="#" className="footerIcon"><FaPinterestP className="text-sm sm:text-base"/></Link>
            <Link to="#" className="footerIcon"><FaInstagram className="text-sm sm:text-base"/></Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Wishlist;