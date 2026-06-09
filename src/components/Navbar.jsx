import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddToCart } from "./AddToCart";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    {name:"Product List", path:"/productlist"},
    {name:"Cart", path: "/cart"},
  ];

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          ElectroMart
        </Link>

       

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Links */}
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path
                      ? "active fw-bold text-primary"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
                
              </li>
            ))}
          </ul>

          {/* Cart */}
          <AddToCart/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;