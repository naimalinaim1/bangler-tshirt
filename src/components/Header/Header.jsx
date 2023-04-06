import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="space-x-6 text-center my-4">
        <Link className="text-xl text-blue-600" to="/">
          Home
        </Link>
        <Link className="text-xl text-blue-600" to="/review">
          Order Review
        </Link>
        <Link className="text-xl text-blue-600" to="/about">
          About
        </Link>
        <Link className="text-xl text-blue-600" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
