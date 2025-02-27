import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">React Querry</h1>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle navigation">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex font-semibold space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/trad" 
              className={({ isActive }) => 
                `px-4 py-2 rounded transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              Traditional Fetch
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/rq" 
              className={({ isActive }) => 
                `px-4 py-2 rounded transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              React Query
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className="md:hidden  bg-gray-800 px-6 py-4 space-y-2">
          <li>
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `inline-block px-4 py-2 rounded transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/trad" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `inline-block px-4 py-2 rounded transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              Traditional Fetch
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/rq" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `inline-block px-4 py-2 rounded transition ${
                  isActive ? "bg-blue-500" : "hover:bg-gray-700"
                }`
              }
            >
              React Query
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};
