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
      <div className="mt-10 mb-20">
        <h1 className="text-2xl font-bold text-center mb-8">
          My Wishlist
        </h1>
        <div className="border border-gray-100 rounded-lg">
          {/* Header */}
          <div className="grid grid-cols-4 px-6 py-4 text-xs uppercase tracking-wide text-gray-400 border-b border-gray-100">
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span>Stock Status</span>
          </div>

          {/* Wishlist Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center px-6 py-4 border-b last:border-b-0 border-gray-100"
            >
              {/* Product */}
              <div className="col-span-2 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <span className="font-medium">{item.name}</span>
              </div>

              {/* Price */}
              <div>
                <span className="font-semibold">
                  ${item.price.toFixed(2)}
                </span>

                {item.oldPrice && (
                  <span className="ml-2 text-gray-400 line-through text-sm">
                    ${item.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock + Cart + Remove */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.inStock
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>

                  <button
                    disabled={!item.inStock}
                    className={`px-5 py-2 rounded-full text-sm font-medium ${
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
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                  <FaXmark size={13} />
                </button>
              </div>
            </div>
          ))}

          {/* Share */}
          <div className="flex items-center gap-2 px-6 py-4">
            <span className="text-sm text-gray-500">Share:</span>
            <Link to="#" className="footerIcon"><FaFacebookF className="text-base sm:text-lg"/></Link>
            <Link to="#" className="footerIcon"><FaTwitter className="text-base sm:text-lg"/></Link>
            <Link to="#" className="footerIcon"><FaPinterestP className="text-base sm:text-lg"/></Link>
            <Link to="#" className="footerIcon"><FaInstagram className="text-base sm:text-lg"/></Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Wishlist;