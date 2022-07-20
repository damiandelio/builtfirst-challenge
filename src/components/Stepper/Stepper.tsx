import { FunctionComponent } from "react";
import styles from "./Stepper.module.scss";

export const Stepper: FunctionComponent = () => {
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.bullet}>1</div>
      <div>SELECT DEALS</div>
      <div className={styles.line} />
      <div className={styles.bullet}>2</div>
      <div>EDIT COLLECTION</div>
      <div className={styles.line} />
      <div className={styles.bullet}>3</div>
      <div>CONFIRM</div>
    </div>
  );
};
