import {
	useGetProductsListQuery,
	useUpdateProductMutation,
} from '../../../store/productsApi'
import { getRandomIntInclusive } from '../../../utils/getRandom'
import style from './develop.module.sass'

const Develop = () => {
	const { data: products = [], isLoading, isSuccess, isError } = useGetProductsListQuery()
	const [updateProduct] = useUpdateProductMutation()

	const catcherUpdateProduct = async (body) => {
		try {
			await updateProduct(body)
		} catch (error) {
			console.log(error)
		}
	}

	function addRate(product) {
		return {
			...product,
			// Указать новые данные
			rate: {
				value: getRandomIntInclusive(1, 5),
				count: getRandomIntInclusive(1, 200, 0),
			},
		}
	}
	function deleteField(product) {
		// удаляем лишние поля
		const { rate, ...rest } = product
		return { ...rest }
	}

	const updateProducts = async (transform) => {
		for (const product of products) {
			await catcherUpdateProduct(transform(product))
		}
	}

	const handleUpdateProducts = (transform) => {
		updateProducts(transform)
	}

	const addCategory = (product) => {
		const newProduct = { ...product }
		newProduct.category = newProduct.catagory
		delete newProduct.catagory
		console.log(newProduct)
		return newProduct
	}
	return (
		<>
			{isLoading && 'loading...'}
			{isSuccess && (
				<div className={style.container}>
					<button onClick={() => handleUpdateProducts(addRate)}>добавить рейтинг</button>
					<button onClick={() => handleUpdateProducts(addCategory)}>
						добавить категории
					</button>
					<button onClick={() => handleUpdateProducts(deleteField)}>
						удалить поле продуктов
					</button>
				</div>
			)}
			{isError && 'error...'}
		</>
	)
}

export default Develop
