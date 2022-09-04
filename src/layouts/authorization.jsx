import { Route, Switch } from "react-router-dom";
import LoginPage from "../components/page/login";
import RegistrationPage from "../components/page/registration";
import "./authorization.css";

const Login = () => {
  return (
    <div className="authLayout">
      <Switch>
        <Route path="/login/registrtion" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default Login;
