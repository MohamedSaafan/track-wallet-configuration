import Styles from "./stepper.module.scss";

interface Props {
  activeNumber: string;
}

const Stepper: React.FC<Props> = ({ activeNumber }) => {
  const block1Classes =
    activeNumber === "1" || activeNumber === "2" || "3"
      ? `${Styles.stepper__itemActive} ${Styles.stepper__item}`
      : Styles.stepper__item;

  const block2Classes =
    activeNumber === "3" || activeNumber === "2"
      ? `${Styles.stepper__itemActive} ${Styles.stepper__item}`
      : Styles.stepper__item;

  const block3Classes =
    activeNumber === "3"
      ? `${Styles.stepper__itemActive} ${Styles.stepper__item}`
      : Styles.stepper__item;

  const lin1Classes =
    activeNumber === "2" || activeNumber === "3"
      ? `${Styles.stepper__lineActive} ${Styles.stepper__line}`
      : Styles.stepper__line;
  const lin2Classes =
    activeNumber === "3"
      ? `${Styles.stepper__lineActive} ${Styles.stepper__line}`
      : Styles.stepper__line;
  return (
    <div className={Styles.stepper}>
      <div className={block1Classes}>
        <div className={`${Styles.stepper__content}`}>1</div>
        <h4 className={Styles.stepper__label}>Ceate Password</h4>
      </div>
      <div className={lin1Classes}></div>
      <div className={block2Classes}>
        <div className={Styles.stepper__content}>2</div>
        <h4 className={Styles.stepper__label}>Recovery Phrase</h4>
      </div>
      <div className={lin2Classes}></div>

      <div className={block3Classes}>
        <div className={Styles.stepper__content}>3</div>
        <h4 className={Styles.stepper__label}>Confirm</h4>
      </div>
    </div>
  );
};

export default Stepper;
