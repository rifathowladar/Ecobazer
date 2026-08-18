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


const Wishlist = () => {
  // Dynamic Wishlist Data State
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Green Capsicum',
      image: greencapsicum,
      price: '$14.99',
      originalPrice: '$20.99',
      inStock: true
    },
    {
      id: 2,
      name: 'Chinese Cabbage',
      image: redcapsicum,
      price: '$45.00',
      originalPrice: null,
      inStock: true
    },
    {
      id: 3,
      name: 'Fresh Sujapuri Mango',
      image: mango,
      price: '$09.00',
      originalPrice: null,
      inStock: false
    }
  ]);

  // Remove Item Functionality
  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-[#f9f9f9] py-8 sm:py-12 min-h-[80vh]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-2xl sm:text-3xl font-bold font-poppins text-[#1A1A1A] mb-6 sm:mb-8">
            My Wishlist
          </h1>

          {wishlistItems.length > 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              
              {/* Desktop Table Header */}
              <div className="hidden md:grid md:grid-cols-12 px-6 py-4 bg-gray-50 border-b font-poppins text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <span className="col-span-5">Product</span>
                <span className="col-span-2">Price</span>
                <span className="col-span-2">Stock Status</span>
                <span className="col-span-3 text-right">Action</span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100">
                {wishlistItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col md:grid md:grid-cols-12 items-start md:items-center p-4 sm:p-6 gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    
                    {/* Product Image & Name */}
                    <div className="col-span-5 flex items-center gap-3 w-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-14 sm:h-14 rounded-lg object-cover border border-gray-100 shrink-0"
                      />
                      <span className="font-poppins font-medium text-sm sm:text-base text-[#1A1A1A]">
                        {item.name}
                      </span>
                    </div>

                    {/* Price & Stock Status (Mobile Row) */}
                    <div className="flex items-center justify-between w-full md:w-auto md:contents">
                      
                      {/* Price */}
                      <div className="col-span-2 font-poppins">
                        <span className="font-semibold text-sm sm:text-base text-[#1A1A1A]">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs sm:text-sm text-gray-400 line-through ml-2">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Stock Status */}
                      <div className="col-span-2">
                        {item.inStock ? (
                          <span className="inline-block bg-green-100 text-[#2C742F] text-xs font-medium px-3 py-1 rounded-full">
                            In Stock
                          </span>
                        ) : (
                          <span className="inline-block bg-red-100 text-red-500 text-xs font-medium px-3 py-1 rounded-full">
                            Out of Stock
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Actions (Add to Cart & Delete Button) */}
                    <div className="col-span-3 flex items-center justify-between md:justify-end gap-3 w-full mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                      
                      {item.inStock ? (
                        <button className="flex-1 md:flex-none bg-[#00B207] hover:bg-[#008a05] text-white text-xs sm:text-sm font-semibold font-poppins px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                          Add to Cart
                        </button>
                      ) : (
                        <button 
                          disabled 
                          className="flex-1 md:flex-none bg-gray-100 text-gray-400 text-xs sm:text-sm font-semibold font-poppins px-5 py-2.5 rounded-full cursor-not-allowed"
                        >
                          Out of Stock
                        </button>
                      )}

                      {/* Remove Button */}
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all shrink-0 cursor-pointer"
                        title="Remove Item"
                      >
                        <FaXmark className="text-lg" />
                      </button>

                    </div>

                  </div>
                ))}
              </div>

              {/* Share Options */}
              <div className="flex flex-wrap items-center gap-3 px-6 py-4 bg-gray-50 border-t border-gray-100">
                <span className="text-sm font-poppins font-medium text-gray-600">Share:</span>
                <div className="flex items-center gap-2">
                  <Link to="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-white text-gray-600 border border-gray-200 transition-colors">
                    <FaFacebookF className="text-xs" />
                  </Link>
                  <Link to="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B207] hover:text-white text-gray-600 border border-gray-200 transition-colors">
                    <FaTwitter className="text-xs" />
                  </Link>
                  <Link to="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B207] hover:text-white text-gray-600 border border-gray-200 transition-colors">
                    <FaPinterestP className="text-xs" />
                  </Link>
                  <Link to="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B207] hover:text-white text-gray-600 border border-gray-200 transition-colors">
                    <FaInstagram className="text-xs" />
                  </Link>
                </div>
              </div>

            </div>
          ) : (
            /* Empty State Message */
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
              <p className="text-gray-500 text-lg font-poppins mb-4">Your wishlist is currently empty!</p>
              <Link 
                to="/shop" 
                className="inline-block bg-[#00B207] hover:bg-[#008a05] text-white font-semibold font-poppins px-6 py-3 rounded-full transition-colors"
              >
                Return to Shop
              </Link>
            </div>
          )}

        </div>
      </Container>
    </div>
  )
}

export default Wishlist