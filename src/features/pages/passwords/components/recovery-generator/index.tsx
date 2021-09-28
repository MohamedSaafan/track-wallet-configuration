import Buttons from "../buttons";
import PhraseBox from "../phrase-box";
import Styles from "./recovery-generator.module.scss";

interface Props {}

const RecoveryGenerator: React.FC<Props> = (props) => {
  return (
    <div className={Styles.generator}>
      <div className={Styles.generator__hints}>
        <p className={Styles.generator__hint}>
          Please write down your Seed Phrases and keep it in a safe place. Never
          give this phrase to anyone as it will hand over control of your
          assets!
        </p>
        <p className={Styles.generator__hint}>
          <span>Tips:</span> Use a password manager memorize it or grade it down
          on the story in multiple locations like Voldemort’s horcruxes
        </p>
      </div>
      <PhraseBox />
      <Buttons
        backLink='/passwords'
        backText='Go Back'
        forwardText='Confirm Seed Phrase'
        forwardLink='/passwords/recovery/confirm'
      />
    </div>
  );
};

export default RecoveryGenerator;
