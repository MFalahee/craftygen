import React from "react";

type CartIconProps = {
  cartItemsCount: number;
};

const CartIcon: React.FC<CartIconProps> = ({ cartItemsCount }) => {
  return (
    <div className="cart-icon">
      <i className="fa-shopping-cart"></i>
      <span className="cart-items-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
