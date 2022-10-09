import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import "./buttonBuy.css";

const ButtonBuy = ({ id, isInCart }) => {
  const { cartAddProduct } = useCart();
  const handleClick = () => {
    cartAddProduct(id);
  };
  if (isInCart) {
    return (
      <Link to="/cart">
        <button className="product__buy">В корзине</button>
      </Link>
    );
  }
  return (
    <button className="product__buy" onClick={handleClick}>
      Купить
    </button>
  );
};

export default ButtonBuy;
