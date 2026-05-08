import React from "react";
import { LuBrain } from "react-icons/lu";
import { Link } from "react-router-dom";

const Logo = ({ size }) => {
  return (
    <Link to={"/"} className="inline-flex items-center">
      <svg width="0" height="0">
        <linearGradient id="half-and-half" x1="0%" y1="0%" x2="0%" y2="100%">
          {/* Top 50% White */}
          <stop stopColor="white" offset="50%" />
          {/* Bottom 50% primary */}
          <stop stopColor="#6366F1" offset="50%" />
        </linearGradient>
      </svg>
      <LuBrain
        stroke="url(#half-and-half)"
        size={size}
        style={{
          display: "inline",
          filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.5))",
        }}
      />
    </Link>
  );
};

export default Logo;
