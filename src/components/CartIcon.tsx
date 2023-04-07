import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  display: flex;
  align-items: center;
`;

const CartItemsCount = styled.span`
  margin-left: 4px;
`;
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
