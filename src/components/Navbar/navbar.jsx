import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-blue-500">Abdur Rahman</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">About</Link></li>
          <li><Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Services</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Portfolio</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Testimonials</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md text-center space-y-4 py-4">
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
