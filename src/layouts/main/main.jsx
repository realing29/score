import ProductsPage from "../../components/page/products";
import ProductPage from "../../components/page/product";
import { Route, Switch } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </div>
  );
};

export default Main;
