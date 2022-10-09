import { useEffect } from "react";
import { useState } from "react";
import API from "../../api";
import CartItems from "../../components/ui/cartItems";
import { useCart } from "../../hooks/useCart";
import "./cart.css";
import TotalAmount from "../../components/ui/totalAmount";

const Cart = () => {
  const [products, setProducts] = useState({});
  const { cart, cartChangeProductAmount } = useCart();
  useEffect(() => {
    Object.entries(cart).map(async ([id, { amount }]) => {
      if (!products[id]) {
        const item = { ...(await API.products.getById(id)), amount };
        setProducts((prev) => ({ ...prev, [id]: item }));
      }
    });
    let newProduct = { ...products };
    Object.keys(products).map((id) => {
      if (!cart[id]) {
        delete newProduct[id];
      }
    });
    setProducts(newProduct);
  }, [cart]);

  const handleAmountChange = {
    increment: (id) => {
      setProducts((prev) => ({
        ...prev,
        [id]: { ...prev[id], amount: +prev[id].amount + 1 },
      }));
      cartChangeProductAmount(id, +products[id].amount + 1);
    },
    decrement: (id) => {
      setProducts((prev) => ({
        ...prev,
        [id]: { ...prev[id], amount: +prev[id].amount - 1 },
      }));
      cartChangeProductAmount(id, +products[id].amount - 1);
    },
    set: (id, val) => {
      setProducts((prev) => ({ ...prev, [id]: { ...prev[id], amount: val } }));
      cartChangeProductAmount(id, val);
    },
  };

  const total = Object.values(products).reduce(
    (acc, cur) => {
      return {
        sum: +acc.sum + +cur.amount * +cur.price,
        amount: +acc.amount + +cur.amount,
      };
    },
    { amount: 0, sum: 0 }
  );

  return (
    <div className="cart-container">
      <h1>Корзина</h1>
      <CartItems products={products} onChangeAmount={handleAmountChange} />
      <TotalAmount {...total} />
    </div>
  );
};

export default Cart;
