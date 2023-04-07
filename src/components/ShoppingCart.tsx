import React from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartProps = {
  cartItems: CartItem[];
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
