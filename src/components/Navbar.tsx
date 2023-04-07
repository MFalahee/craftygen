import React from "react";
import CartIcon from "./CartIcon";
import styled from "styled-components";

type NavbarProps = {
  cartItems: any[];
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #212121;
`;

const Logo = styled.div`
  font-size: 24px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 16px;
`;

const NavLink = styled.li`
  cursor: pointer;
`;

const Navbar: React.FC<NavbarProps> = ({ cartItems }) => {
  return (
    <Nav>
      <Logo>CraftyStore</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Categories</NavLink>
        <NavLink>About</NavLink>
      </NavLinks>
      <CartIcon cartItemsCount={cartItems.length} />
    </Nav>
  );
};

export default Navbar;
