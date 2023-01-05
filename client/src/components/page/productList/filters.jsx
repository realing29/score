import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	categoryV2Check,
	countOnPageChange,
	getCountOnPage,
	getIsErrorLoadCategory,
	getSort,
	pageNumberChange,
	sortChange,
} from '../../../store/filter'
import Button from '../../common/button'
import CheckBoxField from '../../common/form/checkBoxField'
import RadioField from '../../common/form/radioField'
import SelectField from '../../common/form/selectField'
import style from './filter.module.sass'
import { getCategoryV2 } from './../../../store/filter'
import Error from '../../common/error'

const Filters = ({ className }) => {
	const dispatch = useDispatch()
	const categories = useSelector(getCategoryV2())
	const isErrorLoadCategory = useSelector(getIsErrorLoadCategory())

	const handleChangeSort = (payload) => {
		dispatch(sortChange(payload.value))
	}
	const handleCheckBoxField = (payload) => {
		dispatch(categoryV2Check(payload))
	}
	const handleChangeCountOnPage = (payload) => {
		dispatch(countOnPageChange(payload))
		dispatch(pageNumberChange(1))
	}

	const sort = useSelector(getSort())

	const radioVariables = [
		{ name: 'сначала популярные', value: 'сначала популярные' },
		{ name: 'сначала недорогие', value: 'сначала недорогие' },
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
					{Object.values(categories).map(({ _id, name, checked }) => (
						<CheckBoxField
							name='category'
							value={name}
							onChange={({ checked }) => handleCheckBoxField({ id: _id, checked })}
							checked={checked}
							key={_id}
						>
							{name}
						</CheckBoxField>
					))}
					{isErrorLoadCategory && <Error />}
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
