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

  const updateItemQuantity = async (id, quantity) => {
    try {
      const response = await axios.put(`${BASE_URL}/cartData/${id}`, {
        quantity,
      });
      setCartItems(
        cartItems.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const existingItem = cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        const response = await axios.put(
          `${BASE_URL}/cartData/${existingItem.id}`,
          { quantity: existingItem.quantity + 1 }
        );
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? response.data : item
          )
        );
      } else {
        const response = await axios.post(`${BASE_URL}/cartData`, {
          ...product,
          quantity: 1,
        });
        setCartItems([...cartItems, response.data]);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const value = {
    cartItems,
    removeItem,
    updateItemQuantity,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
// https://asset.snipes.com/images/f_auto,q_100,d_fallback-sni.png/b_rgb:f8f8f8,c_pad,w_680,h_680/dpr_1.0/01126425_1/nike-air-force-1-'07-wei%c3%9f-1727-1
// https://asset.snipes.com/images/f_auto,q_100,d_fallback-sni.png/b_rgb:f8f8f8,c_pad,w_680,h_680/dpr_1.0/02225263_1/jordan-wmns-air-jordan-1-mid-schwarz-27294-1
