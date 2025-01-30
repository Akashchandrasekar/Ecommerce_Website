import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";  // Cart Icon
import { useCart } from "../Components/CartContext"; // Import Cart Context
import { useAuth } from "../Components/AuthContext";  // Import Auth Context

const Navbar = () => {
  const { cart } = useCart(); // Get cart items from context
  const { user, logout } = useAuth(); // Get user and logout from Auth context
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate cart quantity

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-md">
      <div className="flex justify-between items-center h-20 w-full px-6 md:px-12">
        
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">Shoplify</Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
          <li>
            <Link to="/" className="text-white hover:text-yellow-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="relative text-white flex items-center gap-1 hover:text-yellow-400 transition duration-300">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            </Link>
          </li>
        </ul>

        {/* Authentication buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-white">{user.email}</span>
              <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Sign In</Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
