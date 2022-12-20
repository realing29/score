import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'
import style from './profileLoader.module.sass'

const ProfileLoader = ({ count }) => {
	const items = new Array(count).fill(1)
	return (
		<div className={style.lodaer_field}>
			{items.map((_, i) => (
				<ContentLoader
					width={560}
					height={50}
					viewBox='0 0 560 50'
					backgroundColor='#f5f5f5'
					foregroundColor='#dbdbdb'
					key={'profileLoader' + i}
				>
					<rect x='0' y='0' rx='3' ry='3' width='80' height='15' />
					<rect x='0' y='20' rx='3' ry='3' width='560' height='25' />
				</ContentLoader>
			))}
		</div>
	)
}

ProfileLoader.propTypes = {
	count: PropTypes.number,
}

export default ProfileLoader
