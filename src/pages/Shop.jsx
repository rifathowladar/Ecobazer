import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaStar,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { PiSlidersHorizontal } from "react-icons/pi";

import Container from "../components/layout/Container";
import ProductCard from "../components/product/ProductCard";
import { Link } from "react-router";
import shopdiscount from "../assets/image/shopdiscount.webp"
import redcapsicum from "../assets/image/redcapsicum.webp"
import mango from "../assets/image/mango.webp"
import greencapsicum from "../assets/image/greencapsicum.webp"

const Shop = () => {
  // Filter ON / OFF
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const [catRes] = await Promise.all([
          axios.get("https://dummyjson.com/products?limit=0"),
        ]);

        setProducts(catRes.data.products || []);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  // ================
  // PAGINATION CALCULATIONS
  // ================

  const itemsPerPage = showFilter ? 15 : 20;

  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getVisiblePages = () => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 5) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 4) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    totalPages,
  ];
};

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [showFilter]);

  return (
    <Container>
      <div className="py-8">
        {/* =================================
            TOP BAR
        ================================= */}

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Filter + Search */}
          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium transition bg-primary text-white"
            >
              Filter
              {showFilter ? <FaTimes size={17} /> : <PiSlidersHorizontal size={20} />}
            </button>
          </div>

          {/* Sort */}
          <div className="text-start flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>

            <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary">
              <option value="latest">Latest</option>
              <option value="low">Price Low</option>
              <option value="high">Price High</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
          {/* Result */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-900">
                {products.length}
              </span>{" "}
              Results Found
            </p>
          </div>
        </div>

        {/* =================================
            MAIN
        ================================= */}

        <div
          className={`grid gap-6 ${
            showFilter ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {/* =================================
              SIDEBAR
          ================================= */}

          {showFilter && (
            <aside className="rounded-lg bg-white lg:col-span-1">
              {/* Filter Header */}
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Filters</h2>

                <button className="text-xs font-medium text-primary hover:underline">
                  Clear All
                </button>
              </div>

              {/* =========================
                  CATEGORY
              ========================= */}

              <div className="border-b border-gray-200 pb-5">
                <button className="flex w-full items-center justify-between">
                  <span className="font-semibold">All Categories</span>
                  <FaChevronUp size={11} />
                </button>

                <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                  <div>
                    <input hidden type="checkbox" className="fresh" id="freshClick" />
                    <label className="freshLabel" htmlFor="freshClick">Fresh Fruit</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="fresh" id="vegetables" />
                    <label className="freshLabel" htmlFor="vegetables">Vegetables</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="fresh" id="cooking" />
                    <label className="freshLabel" htmlFor="cooking">Cooking</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="fresh" id="snacks" />
                    <label className="freshLabel" htmlFor="snacks">Snacks</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="fresh" id="beverages" />
                    <label className="freshLabel" htmlFor="beverages">Beverages</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="fresh" id="beauty" />
                    <label className="freshLabel" htmlFor="beauty">Beauty & Health</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="fresh" id="bread" />
                    <label className="freshLabel" htmlFor="bread">Bread & Bakery</label>
                  </div>
                </div>
              </div>

              {/* =========================
                  PRICE
              ========================= */}

              <div className="border-b border-gray-200 py-5">
                <button className="flex w-full items-center justify-between">
                  <span className="font-semibold">Price</span>
                  <FaChevronUp size={11} />
                </button>

                <div className="mt-5">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    defaultValue={1000}
                    className="w-full accent-primary"
                  />

                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>

              {/* =========================
                  RATING
              ========================= */}

              <div className="py-5">
                <button className="flex w-full items-center justify-between">
                  <span className="font-semibold">Rating</span>
                  <FaChevronUp size={11} />
                </button>

                <div className="mt-4 space-y-2">
                  {[4, 3, 2, 1].map((stars) => (
                    <label
                      key={stars}
                      className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                    >
                      <input
                        type="checkbox"
                        name="rating"
                        className="accent-[#2C742F]"
                      />
                      <span className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            size={11}
                            className={
                              i < stars ? "text-yellow-400" : "text-gray-200"
                            }
                          />
                        ))}
                      </span>
                      <span>& up</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* =========================
                  Popular Tag
              ========================= */}

              <div className="border-t border-gray-200 py-5">
                <button className="flex w-full items-center justify-between">
                  <span className="font-semibold">Popular Tag</span>
                  <FaChevronUp size={11} />
                </button>

                <div className="mt-4 gap-2 flex flex-wrap">
                  <div>
                    <input hidden type="checkbox" className="healthy" id="healthyClick" />
                    <label className="healthyLabel" htmlFor="healthyClick">Healthy</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="fat" />
                    <label className="healthyLabel" htmlFor="fat">Low fat</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="vegetarian" />
                    <label className="healthyLabel" htmlFor="vegetarian">Vegetarian</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="food" />
                    <label className="healthyLabel" htmlFor="food">Kid foods</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="vitamin" />
                    <label className="healthyLabel" htmlFor="vitamin">Vitamins</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="bread" />
                    <label className="healthyLabel" htmlFor="bread">Bread</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="meat" />
                    <label className="healthyLabel" htmlFor="meat">Meat</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="snacks" />
                    <label className="healthyLabel" htmlFor="snacks">Snacks</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="tiffin" />
                    <label className="healthyLabel" htmlFor="tiffin">Tiffin</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="launch" />
                    <label className="healthyLabel" htmlFor="launch">Launch</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="dinner" />
                    <label className="healthyLabel" htmlFor="dinner">Dinner</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="breakfast" />
                    <label className="healthyLabel" htmlFor="breakfast">Breakfast</label>
                  </div>
                  <div>
                    <input hidden type="checkbox" className="healthy" id="fruit" />
                    <label className="healthyLabel" htmlFor="fruit">Fruit</label>
                  </div>
                </div>
              </div>
              <Link to="#">
                <img src={shopdiscount} alt="shopdiscount" />
              </Link>
              <div className="">
                <h4 className="mt-5 mb-3 text-xl font-medium">Sale Products</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex border border-[#999999] hover:border-primary rounded-md group">
                    <img src={redcapsicum} alt="redcapsicum" />
                    <div className="px-3 py-6">
                      <h6 className="text-sm font-medium group-hover:text-primary">Red Capsicum</h6>
                      <p className="text-base">$32.00<span className="text-[#999999] pl-1 line-through">$20.99</span></p>
                      <p className="flex pt-1.5 text-[#FF8A00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-[#999999]">
                          <FaStar />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex border border-[#999999] hover:border-primary rounded-md group">
                    <img src={mango} alt="mango" />
                    <div className="px-3 py-6">
                      <h6 className="text-sm font-medium group-hover:text-primary">Chanise Cabbage</h6>
                      <p className="text-base">$24.00<span className="text-[#999999] pl-1 line-through">$20.99</span></p>
                      <p className="flex pt-1.5 text-[#FF8A00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-[#999999]">
                          <FaStar />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex border border-[#999999] hover:border-primary rounded-md group">
                    <img src={greencapsicum} alt="greencapsicum" />
                    <div className="px-3 py-6">
                      <h6 className="text-sm font-medium group-hover:text-primary">Green Capsicum</h6>
                      <p className="text-base">$24.00<span className="text-[#999999] pl-1 line-through">$20.99</span></p>
                      <p className="flex pt-1.5 text-[#FF8A00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-[#999999]">
                          <FaStar />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* ================================
              PRODUCT AREA
          ================================= */}

          <main className={showFilter ? "lg:col-span-3" : "lg:col-span-1"}>
            {/* =========================
                PRODUCT GRID
            ========================= */}

            <div
              className={`grid gap-4 ${
                showFilter
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-3 xl:grid-cols-4"
              }`}
              >
              {currentProducts.map((product) => (
                <Link to="/details">
                  <ProductCard key={product.id} product={product} />
                </Link>
              ))}
            </div>

            {/* =============================== */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                {/* Previous */}
                <button
                  onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaChevronLeft size={12} />
                </button>

                {/* Page Numbers */}
                {getVisiblePages().map((page, index) =>
                  page === "left" || page === "right" ? (
                    <span
                      key={`${page}-${index}`}
                      className="flex h-10 w-10 items-center justify-center text-gray-500"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition text-gray-600 ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                {/* Next */}
                <button
                  onClick={() =>
                    goToPage(Math.min(currentPage + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Container>
  );
};

export default Shop;