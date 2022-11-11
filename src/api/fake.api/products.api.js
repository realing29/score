const fetchAll = async () => {
  const respons = await fetch("http://localhost:81/products")
  const result = await respons.json()
  return result
}
const getById = async (id) => {
  const respons = await fetch(`http://localhost:81/products/${id}`)
  const result = await respons.json()
  return result
}

export default { fetchAll, getById }
