import React, {useState} from "react";
import Button from "./buttons";
import HamburgerButton from "./HamburgerButton";

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-secondary sticky top-0 w-full p-4 shadow-md z-100">
      <div className="flex justify-between items-center">
        <h1 className="text-primary italic">Plateau Hotels</h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            <li><a href="/home">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <Button variant="primary">Book Now</Button>
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <HamburgerButton open={open} setOpen={setOpen}/>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a 
                href="/home" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)} // Close menu when link clicked
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/rooms" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Rooms
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <Button variant="primary" fullWidth className="mt-4">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
 


export default Navbar;