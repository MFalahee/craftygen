import React from "react";
import styled from "styled-components";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartProps = {
  cartItems: CartItem[];
};

const Cart = styled.div`
  background-color: #212121;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
`;

const CartItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Cart>
      <h2>Shopping Cart</h2>
      <CartItems>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </CartItems>
      <CartTotal>
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </CartTotal>
    </Cart>
  );
};

export default ShoppingCart;
