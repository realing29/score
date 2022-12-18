import ContentLoader from 'react-content-loader'
import style from './productPage.module.sass'

const ProductPageLoader = (props) => {
	return (
		<div className={style.loader_container}>
			<ContentLoader
				width={695}
				viewBox='0 0 695 730'
				backgroundColor='#f5f5f5'
				foregroundColor='#dbdbdb'
				{...props}
			>
				{/* наименование */}
				<rect x='20' y='20' rx='3' ry='3' width='350' height='30' />
				{/* фото */}
				<rect x='20' y='70' rx='3' ry='3' width='660' height='436' />
				{/* описание */}
				<rect x='20' y='520' rx='3' ry='3' width='600' height='15' />
				<rect x='20' y='540' rx='3' ry='3' width='580' height='15' />
				<rect x='20' y='560' rx='3' ry='3' width='600' height='15' />
				<rect x='20' y='580' rx='3' ry='3' width='400' height='15' />
				{/* оценка */}
				<rect x='20' y='620' rx='3' ry='3' width='110' height='20' />
				{/* цена */}
				<rect x='300' y='640' rx='3' ry='3' width='125' height='40' />
				{/* кнопка купить */}
				<rect x='312' y='690' rx='3' ry='3' width='100' height='30' />
			</ContentLoader>
		</div>
	)
}

export default ProductPageLoader
