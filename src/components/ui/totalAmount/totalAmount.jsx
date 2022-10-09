import "./totalAmount.css";

const TotalAmount = ({ sum, amount }) => {
  return (
    <div className="total-container">
      <h3>Итого</h3>
      <p>Товаров: {amount}</p>
      <p className="total-container__sum">{sum} р.</p>
      <button className="total-container__buy">Оформить</button>
    </div>
  );
};

export default TotalAmount;
