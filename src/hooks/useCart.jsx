import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { cartGetProducts, updateCart } from "../services/localStorage.service";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartGetProducts() || {});
  useEffect(() => {
    updateCart(cart);
  }, [cart]);
  const cartAddProduct = (id) => {
    setCart((prev) => ({ ...prev, [id]: { amount: 1 } }));
  };
  const cartChangeProductAmount = (id, val) => {
    if (+val < 1) {
      setCart((prev) => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    } else {
      setCart((prev) => ({ ...prev, [id]: { amount: val } }));
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, cartAddProduct, cartChangeProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
