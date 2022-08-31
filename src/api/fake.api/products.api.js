const fetchAll = async () => {
  const respons = await fetch("http://localhost:81/products");
  const result = await respons.json();
  return result;
};

export default { fetchAll };
