import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";  // Example for SignIn page
import SignUp from "./Pages/SignUp";  // Example for SignUp page
import { CartProvider } from "./Components/CartContext";  // Cart Context
import { AuthProvider } from "./Components/AuthContext";  // Auth Context
import Footer from "./Components/Footer";

const App = () => {
  return (
    <AuthProvider>  {/* Wrap your app with AuthProvider */}
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-yellow-500 text-white">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              {/* Add more routes here */}
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
