import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import Input from "./components/input";
import Inputs from "./components/inputs";
import RecoveryGenerator from "./components/recovery-generator";
import Stepper from "./components/stepper";
import Styles from "./passwords.module.scss";
interface Props {}
const Passwords: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.passwords}`}>
      <Header />
      <Stepper activeNumber='1' />
      <Switch>
        <Route path='/passwords/inputs'>
          <Inputs />{" "}
        </Route>
        <Route
          path='/passwords/recovery/generate'
          component={RecoveryGenerator}
        />

        <Redirect to='/passwords/inputs' />
      </Switch>
    </div>
  );
};

export default Passwords;
