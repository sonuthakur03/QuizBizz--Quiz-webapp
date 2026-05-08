import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

export default function Header() {
  const navItems = ["Home", "Quizzes", "Score", "Topics"];

  return (
    <header className="bg-surface border-b border-border px-16 py-4 flex-center justify-between sticky top-0 z-10">
      <h1 className="font-heading text-2xl text-primary flex items-center">
        <span className="text-text">Quiz</span>
        <Logo size={40} />
        Bizz
      </h1>

      <ul className="flex gap-6">
        {navItems.map((item) => (
          <NavLink
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            key={item}
            className={({ isActive }) =>
              `nav-item ${isActive ? "text-primary font-bold " : ""}`
            }
          >
            {item}
          </NavLink>
        ))}
      </ul>

      {/* <div className="flex-center gap-4">
        <button className=" text-text font-semibold py-2 px-8 border border-border rounded-md">
          Sign In
        </button>
        <button className="bg-primary text-text font-semibold py-2 px-8 border border-border rounded-md">
          Sign Up
        </button>
      </div> */}
    </header>
  );
}
