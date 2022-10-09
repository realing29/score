import { useEffect } from "react";
import { useState } from "react";
import API from "../../api";
import CartItems from "../../components/ui/cartItems";
import {
  cartChangeProductAmount,
  cartGetProducts,
} from "../../services/localStorage.service";
import "./cart.css";

const Cart = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const prouductsIds = cartGetProducts();
    Object.entries(prouductsIds).map(async ([id, { amount }]) => {
      const item = { ...(await API.products.getById(id)), amount };
      setProducts((prev) => ({ ...prev, [id]: item }));
    });
  }, []);

  const handleAmountChange = {
    increment: (id) => {
      setProducts((prev) => ({
        ...prev,
        [id]: { ...prev[id], amount: prev[id].amount + 1 },
      }));
      cartChangeProductAmount(id, products[id].amount + 1);
    },
    decrement: (id) => {
      setProducts((prev) => ({
        ...prev,
        [id]: { ...prev[id], amount: prev[id].amount - 1 },
      }));
      cartChangeProductAmount(id, products[id].amount - 1);
    },
    set: (id, val) => {
      setProducts((prev) => ({ ...prev, [id]: { ...prev[id], amount: val } }));
      cartChangeProductAmount(id, val);
    },
  };

  return (
    <div className="cart-container">
      <h1>Корзина</h1>
      <CartItems products={products} onChangeAmount={handleAmountChange} />
    </div>
  );
};

export default Cart;
