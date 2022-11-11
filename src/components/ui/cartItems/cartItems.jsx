import PropTypes from "prop-types"
import "./cartItems.css"

const CartItems = ({ products, onChangeAmount }) => {
  const handleChangeAmount = (e, id) => {
    if (e.target.value >= 0) {
      onChangeAmount.set(id, e.target.value)
    }
  }
  const newProducts = Object.values(products)
  if (newProducts.length > 0) {
    return (
      <>
        {newProducts.map(({ amount, price, name, src, id }) => (
          <div key={id} className="item-cart">
            <div className="item-cart__container-img">
              <img className="item-cart__img" src={src} alt={src} />
            </div>
            <h3 className="item-cart__name">{name}</h3>
            <p className="item-cart__price">{price} р.</p>
            <p>x</p>
            <button onClick={() => onChangeAmount.decrement(id)}>-</button>
            <input
              className="item-cart__amount"
              type="text"
              value={amount}
              step="1"
              onChange={(e) => handleChangeAmount(e, id)}
            />
            <button onClick={(e) => onChangeAmount.increment(id)}>+</button>
            <p>{" шт."}</p>
            <p>=</p>
            <p>{+amount * +price} р.</p>
          </div>
        ))}
      </>
    )
  } else {
    return "Корзина пуста"
  }
}

CartItems.propTypes = {
  products: PropTypes.object,
  onChangeAmount: PropTypes.object,
}

export default CartItems
