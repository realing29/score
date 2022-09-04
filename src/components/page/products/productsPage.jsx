import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import "./products.css";

const ProductsPage = () => {
  const [products, setProducts] = useState();
  const fetchProducts = async () => {
    const result = await API.products.fetchAll();
    setProducts(result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products
        ? products.map((item) => (
            <div key={item.id} className="product">
              <div className="product__img-container">
                <img src={item.src} alt={item.src} className="product__img" />
              </div>
              <div className="product__info-container">
                <h3>
                  <Link to={"/product/" + item.id}>{item.name}</Link>
                </h3>
                <p>
                  <span>{item.description}</span>
                </p>
              </div>
              <div className="product__buy-container">
                <p className="product__price">
                  <span>{item.price + " ₽"}</span>
                </p>
                <button className="product__buy">Купить</button>
              </div>
            </div>
          ))
        : new Array(10).fill(0).map((item, i) => (
            <div key={i} className="product product_loader">
              <div className="product__img-container">
                <div className="product__img_loader" />
              </div>
              <div className="product__info-container product__info-container_loader">
                <h3>&ensp;&ensp;&ensp;&ensp;&ensp;</h3>
                <p>
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                  <span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                  </span>{" "}
                </p>
              </div>
              <div className="product__buy-container">
                <p className="product__price">
                  <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                </p>
                <button className="product__buy">
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ProductsPage;
