import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../api";
import ButtonBuy from "../../ui/buttonBuy/buttonBuy";
import "./product.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const getProduct = async (id) => {
    const product = await API.products.getById(id);
    setProduct(product);
  };
  useEffect(() => {
    getProduct(id);
  }, [id]);
  return (
    product && (
      <div className="product-card">
        <h1>{product.name}</h1>
        <div>
          <img src={product.src} alt={product.src} />
        </div>
        <p>{product.description}</p>
        <div>{product.price + " ₽"}</div>
        <ButtonBuy id={id} />
      </div>
    )
  );
};

export default ProductPage;
