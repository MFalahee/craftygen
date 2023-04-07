import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f5f5f5;
  color: #141414;
  padding: 40px;
  margin: 20px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const HeroSection: React.FC = () => {
  return (
    <Section>
      <Title>Welcome to CraftyStore</Title>
      <Description>
        Discover unique handcrafted items and support independent creators.
      </Description>
    </Section>
  );
};

export default HeroSection;
