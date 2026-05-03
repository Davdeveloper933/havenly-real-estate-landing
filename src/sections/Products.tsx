import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import ArrowRight from "../components/icons/ArrowRight";
import { products } from "../constants";

const Products = () => {
  const sectionTitleProps = {
    title: "Explore Our Signature Developments",
    secondaryText:
      "At Havenly, we believe that every project tells a story. Below is a selection of our signature developments that embody our commitment to innovation, quality, and sustainability.”",
    buttonText: "Explore more Property",
    maxW: 120,
  };

  return (
    <section className="lg:pt-29 pb-20">
      <div className="container">
        <SectionTitle {...sectionTitleProps} />
      </div>
      <div className="pt-9.5">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-6">
            {products.map((product, index) => (
              <div key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
