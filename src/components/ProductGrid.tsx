import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid">
      <ProductCard
        id={1}
        name="Handmade Wooden Toy"
        price={25}
        image_url="/path/to/image.jpg"
      />
      {/* Add more products using the ProductCard component here */}
    </div>
  );
};

export default ProductGrid;
