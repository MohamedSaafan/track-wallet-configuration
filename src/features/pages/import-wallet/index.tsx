import Heading from "../../../components/heading";
import SeedCollector from "../../../components/seed-collector";
import Buttons from "../passwords/components/buttons";
import Styles from "./import-wallet.module.scss";

interface Props {}

const ImportWallet: React.FC<Props> = (props) => {
  return (
    <div className={`page ${Styles.import}`}>
      <Heading />

      <h3 className={Styles.import__heading}>Import Wallet</h3>
      <div className={Styles.import__collector}>
        <SeedCollector />
      </div>
      <Buttons
        forwardLink='/'
        forwardText='Continue'
        backText='Go Back'
        backLink='/'
      />
    </div>
  );
};

export default ImportWallet;
