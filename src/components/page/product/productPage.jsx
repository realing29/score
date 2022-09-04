import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../api";
import "./index.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const getProduct = async (id) => {
    const product = await API.products.getById(id);
    setProduct(product);
  };
  useEffect(() => {
    getProduct(id);
  }, []);
  console.log("🚀 ~ file: productPage.jsx ~ line 5 ~ ProductPage ~ id", id);
  return (
    product && (
      <>
        <h1>{product.name}</h1>
        <div>
          <img src={product.src} alt={product.src} />
        </div>
        <p>{product.description}</p>
        <div>{product.price + " ₽"}</div>
        <button>Купить</button>
      </>
    )
  );
};

export default ProductPage;
