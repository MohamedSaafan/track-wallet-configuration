import Styles from "./heading.module.scss";
import logo from "../../images/small-logo.svg";

interface Props {}

const Heading: React.FC<Props> = (props) => {
  return (
    <h1 className={Styles.heading}>
      <img src={logo} alt='Track Wallet' />
      Track Wallet
    </h1>
  );
};
export default Heading;
