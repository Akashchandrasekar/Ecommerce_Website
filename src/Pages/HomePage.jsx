import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import { useCart } from "../Components/CartContext";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [cartEffect, setCartEffect] = useState(false); // State for animation effect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle adding to cart with animation
  const handleAddToCart = (product) => {
    addToCart(product);
    setCartEffect(true);
    setTimeout(() => setCartEffect(false), 500); // Reset animation effect after 500ms
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-200 mb-6 text-center flex items-center justify-center gap-2">
        <AiFillShopping className=" text-4xl" /> Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
            <img src={product.image} alt={product.title} className="h-40 w-32 object-contain mb-4" />

            <h2 className="text-md font-semibold text-gray-700 text-center line-clamp-2 h-12">
              {product.title}
            </h2>
            <p className="text-green-600 font-bold text-lg">${product.price}</p>

            <button
              onClick={() => handleAddToCart(product)}
              className={`mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 transform ${cartEffect ? "scale-105" : ""}`}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
