import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;

const ProductGrid: React.FC = () => {
  return (
    <Grid>
      <ProductCard
        id={1}
        name="Handmade Wooden Toy"
        price={25}
        image_url="/path/to/image.jpg"
      />
      {/* Add more products using the ProductCard component here */}
    </Grid>
  );
};

export default ProductGrid;
