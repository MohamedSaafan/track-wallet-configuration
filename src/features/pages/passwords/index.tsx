import Header from "./components/header";
import Stepper from "./components/stepper";
import Styles from "./passwords.module.scss";
interface Props {}
const Passwords: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.passwords}`}>
      <Header />
      <Stepper activeNumber='1' />
    </div>
  );
};

export default Passwords;
