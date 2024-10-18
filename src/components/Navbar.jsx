import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import { useSelector } from 'react-redux';
import { GiShoppingCart } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.items) || [];

  return (
    <nav>
       <h1>E-commerce</h1>
      <Link to="/"><IoHome  size="20px"/>Home</Link>
      <Link to="/"><BiSolidOffer size="20px"/>Offers</Link>
      <Link to="/"><FaMoneyCheckDollar  size="20px"/>Payment</Link>
      <Link to="/"><MdCardGiftcard size="20px"/>Gift Cards</Link>
      <Link to="/cart"><GiShoppingCart size="20px"/>Cart {cartItems.length}</Link>
    </nav>
  );
};

export default Navbar;


