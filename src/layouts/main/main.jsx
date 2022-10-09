import ProductsListPage from "../../components/page/productList";
import ProductPage from "../../components/page/product";
import { Route, Switch } from "react-router-dom";
import "./main.css";

const Main = ({ search }) => {
  return (
    <div className="main-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ProductsListPage search={search} />}
        />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </div>
  );
};

export default Main;
