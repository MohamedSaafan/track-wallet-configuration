import Styles from "./header.module.scss";
import headerIcon from "../../../../../images/finish-header.svg";
interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={Styles.header}>
      <img src={headerIcon} alt='finished!' />

      <h3 className={Styles.header__heading}>Your Wallet has been Created!</h3>
    </header>
  );
};

export default Header;
