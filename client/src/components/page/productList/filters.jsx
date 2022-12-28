import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	categoryChange,
	countOnPageChange,
	getCategory,
	getCountOnPage,
	getSort,
	pageNumberChange,
	sortChange,
} from '../../../store/filter'
import Button from '../../common/button'
import CheckBoxField from '../../common/form/checkBoxField'
import RadioField from '../../common/form/radioField'
import SelectField from '../../common/form/selectField'
import style from './filter.module.sass'

const Filters = ({ className }) => {
	const dispatch = useDispatch()
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

	const [collapse, setCollapse] = useState(true)

	const handleCollapse = () => {
		setCollapse((prev) => !prev)
	}

	const styleSymbol = `${style.filter__symbol} ${
		collapse ? style.filter__symbol__rotate : ''
	}`

	return (
		<aside className={`${className} ${style.filter}`}>
			<div>
				<Button
					type='button'
					className={style.filter__collapse_button}
					onClick={handleCollapse}
				>
					<img className={styleSymbol} src='/assets/arrow.ico' alt='arrow' />
				</Button>
			</div>
			<h2 className={style.collapse__info}>Фильтры</h2>

			<div className={`${style.filter__blocks} ${collapse ? style.collapse : ''}`}>
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
				<div>
					<h2>Отображать на странице</h2>
					<SelectField
						name='countOnPage'
						value={countOnPage}
						label='Карточек товара '
						onChange={handleChangeCountOnPage}
						options={[
							{ value: 5, label: 5 },
							{ value: 10, label: 10 },
							{ value: 20, label: 20 },
						]}
					/>
				</div>
			</div>
		</aside>
	)
}

export default Filters
