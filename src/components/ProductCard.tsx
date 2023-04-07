import React from "react";
import styled from "styled-components";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  padding: 16px;
  border-radius: 8px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

const AddToCartButton = styled.button`
  background-color: #f5f5f5;
  color: #141414;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image_url,
}) => {
  const addToCart = (itemId: number) => {
    console.log(`Added item with id ${itemId} to cart`);
  };

  return (
    <Card>
      <Image src={image_url} alt={name} />
      <h3>{name}</h3>
      <span>${price.toFixed(2)}</span>
      <AddToCartButton onClick={() => addToCart(id)}>
        Add to Cart
      </AddToCartButton>
    </Card>
  );
};

export default ProductCard;
