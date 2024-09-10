// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0022a0] text-white w-full">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Heladería Mayorista
        </div>

        {/* Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#9face3]">Inicio</Link>
          <Link to="/#business" className="hover:text-[#9face3]">Nuestro Negocio</Link>
          <Link to="/products" className="hover:text-[#9face3]">Productos</Link>
          <Link to="/#contact" className="hover:text-[#9face3]">Contacto</Link>
        </div>

        {/* Hamburger Icon - Visible on small screens */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu - Visible on small screens */}
      {isOpen && (
        <div className="md:hidden bg-[#0022a0]">
          <Link to="/" className="block py-2 px-4 hover:bg-[#9face3]">Inicio</Link>
          <Link to="/#business" className="block py-2 px-4 hover:bg-[#9face3]">Nuestro Negocio</Link>
          <Link to="/products" className="block py-2 px-4 hover:bg-[#9face3]">Productos</Link>
          <Link to="/#contact" className="block py-2 px-4 hover:bg-[#9face3]">Contacto</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
