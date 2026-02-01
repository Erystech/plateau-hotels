import React from "react";

const HamburgerButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <span
        className={`absolute h-0.5 w-6 bg-primary transition-transform duration-300 ${
          open ? "rotate-45" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-primary transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-primary transition-transform duration-300 ${
          open ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;