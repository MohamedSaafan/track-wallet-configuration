import Heading from "../../../../../components/heading";
import Styles from "./header.module.scss";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={Styles.header}>
      <Heading />

      <h2 className={Styles.header__message}>Welcome to Track Wallet</h2>
    </header>
  );
};

export default Header;
