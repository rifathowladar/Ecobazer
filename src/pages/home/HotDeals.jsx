import React from "react";
import Container from "../../components/layout/Container";
import ProductCard from "./ProductCard";

const HotDeals = ({ products, title }) => {
  const featuredProduct = products?.[0];
  const otherProducts = products?.slice(1);

  return (
    <section className="py-7 sm:py-20 bg-[#F7F7F7]">
  <Container>
    <h2 className="text-xl sm:text-3xl font-semibold mb-8">{title}</h2>

    {/* safety check */}
    {!products?.length ? (
      <p>Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-px">
        
        {/* Featured Product */}
        {featuredProduct && (
          <div className="hidden sm:block col-span-2 row-span-2">
            <ProductCard
              item={featuredProduct}
              featured={true}
            />
          </div>
        )}


        {/* Other Products */}
        {otherProducts?.map((item) =>
          item ? (
            <ProductCard key={item.id} item={item} />
          ) : null
        )}
      </div>
    )}
  </Container>
</section>
  );
};

export default HotDeals;

