import React from "react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

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
    <div className="product-card">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <span>${price.toFixed(2)}</span>
      <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
