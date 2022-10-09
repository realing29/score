const CART_PRODUCTS = "cart-product";

const getItem = (key) => JSON.parse(localStorage.getItem(key));
const setItem = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const cartAddProduct = (id) => {
  let products = getItem(CART_PRODUCTS);
  if (products === null) {
    products = {};
  }
  if (products[id]) {
    products[id].amount += 1;
  } else {
    products[id] = { amount: 1 };
  }
  setItem(CART_PRODUCTS, products);
};

export const cartGetProducts = () => getItem(CART_PRODUCTS);

export const cartChangeProductAmount = (id, val) => {
  let products = getItem(CART_PRODUCTS);
  products[id].amount = val;
  setItem(CART_PRODUCTS, products);
};
