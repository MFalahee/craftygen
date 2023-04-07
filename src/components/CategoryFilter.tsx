import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  background-color: #f5f5f5;
  color: #141414;
  border: 1px solid #141414;
  padding: 8px;
`;

const CategoryFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const onCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Select
      className="category-filter"
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="all">All Categories</option>
      {/* Add more categories as options here */}
    </Select>
  );
};

export default CategoryFilter;
