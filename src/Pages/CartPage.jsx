import React from "react";
import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total cart price
  const totalCartPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-yellow-500 text-white">
      <h1 className="text-3xl font-bold text-indigo-200 mb-6 text-center">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-gray-900">
              <img src={product.image} alt={product.title} className="h-40 w-32 object-contain mb-4" />
              <h2 className="text-md font-semibold text-gray-700 text-center">{product.title}</h2>
              <p className="text-green-600 font-bold text-lg">${product.price.toFixed(2)}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => decreaseQuantity(product.id)} className="px-3 py-1 bg-red-500 text-white rounded-lg">
                  ➖
                </button>
                <span className="text-lg font-bold">{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)} className="px-3 py-1 bg-green-500 text-white rounded-lg">
                  ➕
                </button>
              </div>

              {/* Product Total Price */}
              <p className="text-md text-gray-800 mt-2">
                Total: <span className="font-bold">${(product.price * product.quantity).toFixed(2)}</span>
              </p>

              {/* Remove Button */}
              <button onClick={() => removeFromCart(product.id)} className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Total Section */}
      {cart.length > 0 && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Total Cart Price: <span className="text-yellow-300">${totalCartPrice.toFixed(2)}</span></h2>
        </div>
      )}

      {/* Exit Button */}
      <div className="mt-6 text-center">
        <button onClick={() => navigate("/")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Exit to Home 🏠
        </button>
      </div>
    </div>
  );
};

export default CartPage;
