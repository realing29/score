import { useHistory } from "react-router-dom";
import "./search.css";
const Search = ({ handleSearch, search }) => {
  const history = useHistory();
  const handleChange = (e) => {
    if (history.location.pathname !== "/") {
      history.push("/");
    }
    handleSearch(e.target.value);
  };
  return (
    <div className="search-product">
      <input
        className="search-product__input"
        type="text"
        value={search}
        placeholder="Поиск товаров"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
