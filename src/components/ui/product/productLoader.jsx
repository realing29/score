import style from './style.module.sass'
import loader from './loader.module.sass'

const ProductLoader = () => {
  return (
    <div className={style.product + ' ' + loader.product_loader}>
      <div className={style.product__img_container}>
        <div className={style.product__img_loader} />
      </div>
      <div className={style.product__info_container}>
        <h3>&ensp;&ensp;&ensp;&ensp;&ensp;</h3>
        <p>
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span>
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span>
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
          <span>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            &ensp;&ensp;&ensp;&ensp;&ensp;
          </span>{' '}
        </p>
      </div>
      <div className='product__buy-container'>
        <p className='product__price'>
          <span>&ensp;&ensp;&ensp;&ensp;&ensp;</span>
        </p>
        <button className='product__buy'>&ensp;&ensp;&ensp;&ensp;&ensp;</button>
      </div>
    </div>
  )
}

export default ProductLoader
