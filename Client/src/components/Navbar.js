import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <img src="/e-shopping.jpg" alt="logo" style={{ width: "159px" }} />
      </div>
      <ul>
        <li>
          <NavLink to="/home" style={{textDecoration:"none",color:"black",fontSize:'20px'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{textDecoration:"none",color:"black",fontSize:'20px'}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/products" style={{textDecoration:"none",color:"black",fontSize:'20px'}}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={{textDecoration:"none",color:"black",fontSize:'20px'}} >Contact</NavLink>
        </li>
        <FiShoppingCart style={{fontSize:'30px'}}/> <span>0</span>
      </ul>
    </nav>
  );
};

export default Navbar;
