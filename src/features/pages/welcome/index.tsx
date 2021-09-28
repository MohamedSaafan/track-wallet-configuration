import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main/main";
import Styles from "./welcome.module.scss";
import { Link } from "react-router-dom";

interface Props {}

const Welcome: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.welcome}`}>
      <Header />
      <Main />
      <div className={Styles.welcome__btns}>
        <Link to='/passwords' className={Styles.welcome__btn}>
          I'm new. let's get set up!
        </Link>
        <Link to='#' className={Styles.welcome__btn}>
          I already have a seed phrase. <br />
          Import Wallet
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
