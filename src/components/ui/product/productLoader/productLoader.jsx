import ContentLoader from 'react-content-loader'
import style from '../product.module.sass'

const ProductLoader = (props) => {
  return (
    <div className={style.product}>
      <ContentLoader
        width={780}
        height={203}
        viewBox='0 0 780 203'
        backgroundColor='#f5f5f5'
        foregroundColor='#dbdbdb'
        {...props}
      >
        {/* фото */}
        <rect x='0' y='0' rx='3' ry='3' width='200' height='200' />
        {/* наименование */}
        <rect x='207' y='20' rx='3' ry='3' width='200' height='20' />
        {/* описание */}
        <rect x='207' y='60' rx='3' ry='3' width='400' height='15' />
        <rect x='207' y='80' rx='3' ry='3' width='380' height='15' />
        <rect x='207' y='100' rx='3' ry='3' width='360' height='15' />
        <rect x='207' y='120' rx='3' ry='3' width='390' height='15' />
        {/* оценка */}
        <rect x='207' y='170' rx='3' ry='3' width='110' height='20' />
        {/* цена */}
        <rect x='700' y='40' rx='3' ry='3' width='75' height='30' />
        {/* кнопка купить */}
        <rect x='680' y='100' rx='3' ry='3' width='98' height='33' />
      </ContentLoader>
    </div>
  )
}

export default ProductLoader
