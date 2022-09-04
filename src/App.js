import "./app.css";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/authorization";
import Cart from "./layouts/cart";
import Header from "./components/ui/header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
