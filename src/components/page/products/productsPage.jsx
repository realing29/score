import { useEffect, useState } from "react";
import API from "../../../api";
import Product from "../../ui/product/product";
import ProductLoader from "../../ui/product/productLoader";
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
        ? products.map((item) => <Product {...item} key={item.id} />)
        : new Array(10).fill(0).map((item, i) => <ProductLoader key={i} />)}
    </div>
  );
};

export default ProductsPage;
