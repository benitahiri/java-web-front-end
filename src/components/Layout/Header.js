import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/#">
            Vehicle Shop
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;
