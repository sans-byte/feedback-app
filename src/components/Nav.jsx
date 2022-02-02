import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li>HOME</li>
        <li>
          <Link to="/about">
            ABOUT
          </Link>
        </li>
      </ul>
      <h2 className="nav-header">FEEDBACK APP</h2>
    </div>
  );
}
export default Nav;
