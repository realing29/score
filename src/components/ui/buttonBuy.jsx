import { cartAddProduct } from "../../services/localStorage.service";

const ButtonBuy = ({ id }) => {
  const handleClick = () => {
    cartAddProduct(id);
  };
  return (
    <button className="product__buy" onClick={handleClick}>
      Купить
    </button>
  );
};

export default ButtonBuy;
