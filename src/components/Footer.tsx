import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #212121;
  margin-top: 20px;
`;

const Copyright = styled.div`
  font-size: 12px;
`;

const SocialLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 16px;
`;

const SocialLink = styled.li`
  cursor: pointer;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Copyright>&copy; 2023 CraftyStore. All rights reserved.</Copyright>
      <SocialLinks>
        <SocialLink>Facebook</SocialLink>
        <SocialLink>Twitter</SocialLink>
        <SocialLink>Instagram</SocialLink>
      </SocialLinks>
    </StyledFooter>
  );
};

export default Footer;
