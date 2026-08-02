import React from 'react'
import Container from '../components/layout/Container'

const Checkout = () => {

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Billing Information */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Billing Information</h2>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">First name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Last name</label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Company Name <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Street Address</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Country / Region</label>
                  <select
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#2C742F] transition-colors bg-white"
                  >
                    <option value="">Select</option>
                    <option value="us">United States</option>
                    <option value="bd">Bangladesh</option>
                    <option value="in">India</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">States</label>
                  <select
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#2C742F] transition-colors bg-white"
                  >
                    <option value="">Selects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#2C742F] transition-colors"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#2C742F] w-4 h-4"
                />
                Ship to a different address
              </label>
            </div>

            <div className="border-t border-gray-200 my-8" />

            <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Info</h3>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Order Notes (Optional)</label>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery"
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none resize-none focus:border-[#2C742F] transition-colors"
              />
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:w-80">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summery</h3>

              <div className="flex flex-col gap-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-700">
                        A<span className="text-gray-400">x</span>
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">$110</span>
                  </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal:</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-2 pt-4 flex justify-between items-center">
                <span className="text-sm text-gray-700">Total:</span>
                <span className="text-lg font-semibold text-gray-800">$56</span>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4">
                <h4 className="text-base font-semibold text-gray-800 mb-3">Payment Method</h4>
                <div className="flex flex-col gap-3">
                    <label
                      className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="accent-primary w-4 h-4"
                      />
                    </label>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-6 bg-primary hover:bg-primary/70 text-white font-medium py-3 rounded-full transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Checkout