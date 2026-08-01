import Container from "../../components/layout/Container";
import ProductCard from "./ProductCard";

const PopularProduct = ({ products, title ,shop = false }) => {

  return (
      <Container>
        <section className="my-5 sm:my-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
            </div>

            <div className={`grid grid-cols-1  ${
                shop
                ? "lg:grid-cols-3 gap-6 rounded-lg"
                : "lg:grid-cols-5"
            }`}>
                {products.map((item) => (
                <ProductCard
                    key={item.id}
                    item={item}
                />
                ))}
            </div>
        </section>
      </Container>
  );
};

export default PopularProduct;