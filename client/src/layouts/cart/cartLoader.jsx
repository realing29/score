import ContentLoader from 'react-content-loader'
import style from './cartLoader.module.sass'

const CartLoader = () => {
	const items = new Array(3).fill(1)
	return (
		<>
			{items.map((_, i) => (
				<div className={style.cart_loader} key={'cartLoader' + i}>
					<div>
						<ContentLoader
							width={310}
							viewBox='0 0 310 73'
							backgroundColor='#f5f5f5'
							foregroundColor='#dbdbdb'
						>
							{/* фото */}
							<rect x='5' y='14' rx='3' ry='3' width='44' height='44' />
							{/* наименование */}
							<rect x='65' y='25' rx='3' ry='3' width='200' height='20' />
						</ContentLoader>
					</div>
					<div>
						<ContentLoader
							width={310}
							viewBox='0 0 310 73'
							backgroundColor='#f5f5f5'
							foregroundColor='#dbdbdb'
						>
							{/* цена */}
							<rect x='5' y='20' rx='3' ry='3' width='50' height='17' />
							<rect x='5' y='43' rx='3' ry='3' width='40' height='12' />
							{/* кнопки */}
							<rect x='70' y='20' rx='20' ry='50' width='90' height='35' />
							{/* шт */}
							<rect x='170' y='35' rx='3' ry='3' width='20' height='12' />
							{/* сумма */}
							<rect x='210' y='20' rx='3' ry='3' width='50' height='17' />
							<rect x='210' y='43' rx='3' ry='3' width='40' height='12' />
							{/* удаление */}
							<rect x='275' y='30' rx='3' ry='3' width='17' height='17' />
						</ContentLoader>
					</div>
				</div>
			))}
		</>
	)
}

export default CartLoader
