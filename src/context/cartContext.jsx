import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  async function fetchCartItems() {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items: ", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  const removeItem = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${id}`);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post(`${BASE_URL}/cartData`, {
        ...product,
        quantity: 1,
      });
      setCartItems([...cartItems, response.data]);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const value = {
    cartItems,
    removeItem,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
