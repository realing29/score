import API from '../../../api'
import { getRandomIntInclusive } from '../../../utils/getRandom'
import style from './develop.module.sass'

const Develop = () => {
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
		const products = await API.products.fetchAll()
		for (const product of products) {
			await API.products.update(transform(product))
		}
	}

	const handleUpdateProducts = (transform) => {
		updateProducts(transform)
	}
	return (
		<div className={style.container}>
			<button onClick={() => handleUpdateProducts(addRate)}>обновить продукты</button>
			<button onClick={() => handleUpdateProducts(deleteField)}>
				удалить поле продуктов
			</button>
		</div>
	)
}

export default Develop
