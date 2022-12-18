import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
	categoryChange,
	countOnPageChange,
	getCategory,
	getCountOnPage,
	getPageNumber,
	getSort,
	pageNumberChange,
	sortChange,
} from '../../../store/filter'
import CheckBoxField from '../../common/form/checkBoxField'
import RadioField from '../../common/form/radioField'
import SelectField from '../../common/form/selectField'
import style from './filter.module.sass'

const Filters = ({ className }) => {
	const dispatch = useDispatch()
	const [, setSearchParams] = useSearchParams()
	const pageNumber = useSelector(getPageNumber())
	const category = useSelector(getCategory())

	const handleChangeSort = (payload) => {
		dispatch(sortChange(payload.value))
	}
	const handleCheckBoxField = (payload) => {
		dispatch(categoryChange(payload))
		dispatch(pageNumberChange(1))
	}
	const handleChangeCountOnPage = (payload) => {
		dispatch(countOnPageChange(payload))
		dispatch(pageNumberChange(1))
	}

	const sort = useSelector(getSort())

	const radioVariables = [
		{ name: 'сначала популярные', value: 'сначала популярные' },
		{ name: 'сначала не дорогие', value: 'сначала не дорогие' },
		{ name: 'сначала дорогие', value: 'сначала дорогие' },
	]

	const countOnPage = useSelector(getCountOnPage())

	return (
		<form className={`${className} ${style.filter}`}>
			<div>
				<h2>Количество товаров на странице</h2>
				<SelectField
					name='countOnPage'
					value={countOnPage}
					onChange={handleChangeCountOnPage}
					options={[
						{ value: 5, label: 5 },
						{ value: 10, label: 10 },
						{ value: 20, label: 20 },
					]}
				/>
			</div>
			<div>
				<h2>По категории</h2>
				<CheckBoxField
					name='category'
					value='инструменты'
					onChange={handleCheckBoxField}
					checked={category['инструменты']}
				>
					инструменты
				</CheckBoxField>
				<CheckBoxField
					name='category'
					value='для уборки'
					onChange={handleCheckBoxField}
					checked={category['для уборки']}
				>
					для уборки
				</CheckBoxField>
				<CheckBoxField
					name='category'
					value='для кухни'
					onChange={handleCheckBoxField}
					checked={category['для кухни']}
				>
					для кухни
				</CheckBoxField>
				<CheckBoxField
					name='category'
					value='другое'
					onChange={handleCheckBoxField}
					checked={category['другое']}
				>
					другое
				</CheckBoxField>
			</div>
			<div>
				<h2>Сортировать по</h2>
				<RadioField
					options={radioVariables}
					name='sort'
					value={sort}
					onChange={handleChangeSort}
				/>
			</div>
		</form>
	)
}

export default Filters