import Styles from "./buttons.module.scss";

import backIcon from "../../../../../images/back.svg";
import { Link } from "react-router-dom";
interface Props {
  backLink: string;
  forwardLink: string;
  backText: string;
  forwardText: string;
}

const Buttons: React.FC<Props> = ({
  backLink,
  backText,
  forwardText,
  forwardLink,
}) => {
  return (
    <div className={Styles.btns}>
      <Link to={backLink} className={Styles.btns__btn}>
        {" "}
        <img src={backIcon} alt='back' />
        {backText}
      </Link>
      <Link to={forwardLink} className={Styles.btns__btn}>
        {forwardText}
      </Link>
    </div>
  );
};

export default Buttons;
