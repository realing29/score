import { Link } from "react-router-dom";
import ButtonBuy from "../buttonBuy";

const Product = ({ id, src, name, description, price }) => {
  return (
    <div className="product">
      <div className="product__img-container">
        <img src={src} alt={src} className="product__img" />
      </div>
      <div className="product__info-container">
        <h3>
          <Link to={"/product/" + id}>{name}</Link>
        </h3>
        <p>
          <span>{description}</span>
        </p>
      </div>
      <div className="product__buy-container">
        <p className="product__price">
          <span>{price + " ₽"}</span>
        </p>
        <ButtonBuy id={id} />
      </div>
    </div>
  );
};

export default Product;
