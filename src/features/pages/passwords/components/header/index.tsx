import Heading from "../../../../../components/heading";
import Styles from "./header.module.scss";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={Styles.header}>
      <Heading />

      <h4 className={Styles.header__message}>Create a new Wallet</h4>
    </header>
  );
};

export default Header;
