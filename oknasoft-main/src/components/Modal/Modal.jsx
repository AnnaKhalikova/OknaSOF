import classNames from "classnames";
import styles from "./Modal.module.scss";

export const Modal = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => setIsActive(false)}
      className={classNames(styles.modal, {
        [styles.active]: isActive,
      })}
    >
      123
    </div>
  );
};
