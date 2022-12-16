import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import style from './pagination.module.sass'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
	const pageCount = Math.ceil(itemsCount / pageSize)
	if (pageCount === 1) return null
	const pages = _.range(1, pageCount + 1)
	return (
		<nav>
			<ul className={style.pagination}>
				{pages.map((page) => (
					<li key={'page_' + page}>
						<button
							className={'btn_design ' + (page === currentPage ? style.active : '')}
							onClick={() => onPageChange(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
}

export default Pagination
