import React, { useState } from 'react'
import Container from '../components/layout/Container'
import greencapsicum from '../assets/image/greencapsicum.webp'
import redcapsicum from '../assets/image/redcapsicum.webp'
import { Link } from 'react-router'

const initialItems = [
  { id: 1, name: 'Green Capsicum', price: 14, quantity: 5, image: greencapsicum },
  { id: 2, name: 'Red Capsicum', price: 14, quantity: 5, image: redcapsicum },
]

const Cart = () => {
  const [items, setItems] = useState(initialItems)

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const total = subtotal + shipping

  return (
    <Container>
      <div className="mt-6 sm:mt-10 mb-10 sm:mb-20 px-2 sm:px-0">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">My Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Cart table */}
          <div className="flex-1 w-full max-w-full">

            <div className="flex-1 w-full border border-gray-100 rounded-lg overflow-hidden">
              {/* Header - hide on mobile */}
              <div className="hidden md:grid grid-cols-5 px-4 sm:px-6 py-3 sm:py-4 text-xs uppercase tracking-wide text-gray-400 border-b">
                <span className="col-span-2">Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="md:grid md:grid-cols-5 md:items-center px-4 sm:px-6 py-4 border-b last:border-b-0 border-gray-100"
                >
                  <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 md:gap-3 mb-3 md:mb-0">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="font-medium text-sm sm:text-base">{item.name}</span>
                    </div>
                    <div className="sm:hidden flex justify-between items-center text-xs text-gray-500">
                      <span>Price:</span>
                      <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <span className="hidden md:block text-sm sm:text-base">${item.price.toFixed(2)}</span>

                  <div className="flex md:justify-start items-center gap-2 mb-3 md:mb-0">
                    <div className="md:hidden text-xs text-gray-500 mr-2">Qty:</div>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
                    >
                      −
                    </button>
                    <span className="w-4 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex sm:hidden justify-between items-center mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Subtotal:</span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-base">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-between">
                    <span className="font-semibold text-sm sm:text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-4 sm:px-6 py-4">
                <button className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-full bg-gray-100 text-xs sm:text-sm font-medium hover:bg-gray-200">
                  Return to shop
                </button>
                <button className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-full bg-gray-100 text-xs sm:text-sm font-medium hover:bg-gray-200">
                  Update Cart
                </button>
              </div>
            </div>
            {/* Coupon */}
              <div className="mt-6 border border-gray-100 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                <span className="font-medium text-lg sm:text-xl w-full sm:w-auto text-center sm:text-left">Coupon Code</span>
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 w-full border border-gray-100 rounded-full px-4 py-2 text-xs sm:text-sm outline-none"
                />
                <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-[#333333] text-white text-xs sm:text-base font-medium">
                  Apply Coupon
                </button>
              </div>
          </div>

          {/* Cart total */}
          <div className="w-full lg:w-80 border border-gray-100 rounded-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Cart Total</h2>

            <div className="flex justify-between py-2 border-b border-gray-100 text-xs sm:text-sm">
              <span className="text-gray-500">Subtotal:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100 text-xs sm:text-sm">
              <span className="text-gray-500">Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between py-3 text-xs sm:text-sm">
              <span className="text-gray-500">Total:</span>
              <span className="font-bold text-sm sm:text-base">${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 rounded-full">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cart