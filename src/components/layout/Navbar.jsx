import React, {useState} from "react";
import Button from "../ui/buttons";
import HamburgerButton from "./HamburgerButton";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-secondary sticky top-0 w-full p-4 shadow-md z-100">
      <div className="flex justify-between items-center">
        <h1 className="text-primary italic">Plateau Hotels</h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            <li>
              <Link to= "/"> Home </Link>
            </li>
            <li>
              <Link to= "/Rooms"> Rooms </Link>
            </li>
            <li>
              <Link to= "/About"> About Us </Link>
            </li>
            <li>
              <Link to= "/contact"> Contact Us </Link>
            </li>
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
              <Link 
                to="/" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)} 
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/Rooms" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)} 
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)} 
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-2 text-neutral-dark hover:text-primary transition-colors"
                onClick={() => setOpen(false)} 
              >
                Contact Us
              </Link>
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