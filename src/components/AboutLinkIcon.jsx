import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutLinkIcon() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion className="about-icon"></FaQuestion>
      </Link>
    </div>
  );
}

export default AboutLinkIcon;
