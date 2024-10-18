import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchProducts,filterByCategory,fetchCategories,sortProductsByPrice} from "../redux/productSlice";
import { IoIosSearch } from "react-icons/io";
import "../App.css";

const Search = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // Fetch the unique categories when the component mounts
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    dispatch(filterByCategory(category));
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    dispatch(sortProductsByPrice(sortValue));
  };


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => dispatch(searchProducts(e.target.value))}
            className="search-input"
          />
          <div>
            <IoIosSearch className="searchButton" />
          </div>
        </div>
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-dropdown">
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div>
      <marquee className="marquee">
        <b>Great Indian Festival DIWALI SPECIAL shop now🥳🤑</b>
      </marquee>
      <div className="sort-wrap">
        <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </>
  );
};

export default Search;
