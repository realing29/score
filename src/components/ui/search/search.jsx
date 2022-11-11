import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import "./search.css";

const Search = ({ handleSearch, search }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    if (location.pathname !== "/") {
      navigate("/");
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

Search.propTypes = {
  handleSearch: PropTypes.func,
  search: PropTypes.string,
};

export default Search;
