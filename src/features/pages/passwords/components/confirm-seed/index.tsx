import React from "react";
import SeedCollector from "../../../../../components/seed-collector";
import Buttons from "../buttons";
import Styles from "./confirm-seed.module.scss";

interface Props {}

const ConfirmSeed: React.FC<Props> = (props) => {
  return (
    <div className={Styles.confirm}>
      <p className={Styles.confirm__heading}>
        Please confirm your seed phrase by filling in the correct word for each
        position.
      </p>

      <SeedCollector />

      <div className={Styles.confirm__btns}>
        <Buttons
          forwardLink='/finish'
          backLink='/passwords/recovery/generate'
          forwardText='Continue'
          backText='Go Back'
        />
      </div>
    </div>
  );
};

export default ConfirmSeed;
