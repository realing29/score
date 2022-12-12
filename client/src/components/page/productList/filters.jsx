import { useState } from 'react'
import CheckBoxField from '../../common/form/checkBoxField'
import RadioField from '../../common/form/radioField'
import style from './filter.module.sass'

const Filters = ({ className, filter, setFilter }) => {
	// const [filter, setFilter] = useState({
	// 	category: {
	// 		инструменты: false,
	// 		'для уборки': false,
	// 		'для кухни': false,
	// 		другое: false,
	// 	},
	// 	sort: '',
	// })

	const handleChange = (target) => {
		setFilter((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}))
	}

	const handleCheckBoxField = ({ name, value, checked }) => {
		setFilter((prevState) => ({
			...prevState,
			[name]: { ...prevState[name], [value]: checked },
		}))
	}

	const radioVariables = [
		{ name: 'сначала популярные', value: 'сначала популярные' },
		{ name: 'сначала не дорогие', value: 'сначала не дорогие' },
		{ name: 'сначала дорогие', value: 'сначала дорогие' },
	]

	return (
		<form className={`${className} ${style.filter}`}>
			<h2>По категории</h2>
			<CheckBoxField
				name='category'
				value='инструменты'
				onChange={handleCheckBoxField}
				checked={filter.category['инструменты']}
			>
				инструменты
			</CheckBoxField>
			<CheckBoxField
				name='category'
				value='для уборки'
				onChange={handleCheckBoxField}
				checked={filter.category['для уборки']}
			>
				для уборки
			</CheckBoxField>
			<CheckBoxField
				name='category'
				value='для кухни'
				onChange={handleCheckBoxField}
				checked={filter.category['для кухни']}
			>
				для кухни
			</CheckBoxField>
			<CheckBoxField
				name='category'
				value='другое'
				onChange={handleCheckBoxField}
				checked={filter.category['другое']}
			>
				другое
			</CheckBoxField>
			<h2>Сортировать по</h2>
			<RadioField
				options={radioVariables}
				name='sort'
				value={filter.sort}
				onChange={handleChange}
			/>
		</form>
	)
}

export default Filters
