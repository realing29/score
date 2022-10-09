import "./app.css";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main/main";
import Login from "./layouts/authorization/authorization";
import Cart from "./layouts/cart/cart";
import Header from "./components/ui/header";
import CartProvider from "./hooks/useCart";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (val) => setSearch(val);

  return (
    <>
      <CartProvider>
        <Header handleSearch={handleSearch} search={search} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/" render={() => <Main search={search} />} />
        </Switch>
      </CartProvider>
    </>
  );
}

export default App;
