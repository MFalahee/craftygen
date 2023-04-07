import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import styled from "styled-components";

// Change: Wrap the content inside a styled component
const Container = styled.div`
  font-family: "Press Start 2P", cursive;
  background-color: #141414;
  color: #f5f5f5;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <Container>
      <Navbar cartItems={cartItems} />
      <HeroSection />
      <CategoryFilter />
      <ProductGrid />
      <ShoppingCart cartItems={cartItems} />
      <Footer />
    </Container>
  );
};

export default App;
