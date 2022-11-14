import createEndpointFetcher from '../../services/db.service'

const endpoint = 'products/'

const products = createEndpointFetcher(endpoint)

const fetchAll = async () => {
  const { data } = await products()
  return data
}
const getById = async (id) => {
  const { data } = await products(id)
  return data
}

const update = async (newProduct) => {
  const { id } = newProduct
  const { data } = await products.put(id, newProduct)
  return data
}

export default { fetchAll, getById, update }
