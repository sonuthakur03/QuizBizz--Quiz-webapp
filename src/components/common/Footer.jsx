import React from "react";
import { Link } from "react-router-dom";
import { LuGithub, LuMail, LuLinkedin } from "react-icons/lu";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border px-10 py-5 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-text font-bold text-lg flex items-center">
            <span className="text-text">Quiz</span>
            <Logo size={40} />
            Bizz
          </h2>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap gap-6 text-sm justify-center">
          <Link
            to="/"
            className="text-text/70 hover:text-primary transition-colors"
          >
            Home
          </Link>

          <Link
            to="/topics"
            className="text-text/70 hover:text-primary transition-colors"
          >
            Topics
          </Link>

          <Link
            to="/contact"
            className="text-text/70 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* RIGHT SOCIALS */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sonuthakur03"
            target="_blank"
            rel="noreferrer"
            className="text-text/70 hover:text-primary transition-colors"
          >
            <LuGithub size={20} />
          </a>

          <a
            href="mailto:rsonuth789@gmail.com"
            className="text-text/70 hover:text-primary transition-colors"
          >
            <LuMail size={20} />
          </a>

          <a
            href="https://linkedin.com/in/sonuthakur03"
            target="_blank"
            rel="noreferrer"
            className="text-text/70 hover:text-primary transition-colors"
          >
            <LuLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
