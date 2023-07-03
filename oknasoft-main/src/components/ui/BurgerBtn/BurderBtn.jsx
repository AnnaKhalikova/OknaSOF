import classNames from "classnames";
import styles from "./BurgerBtn.module.scss";

export const BurgerBtn = ({ event, sidebarStatus }) => {
  return (
    <button
      onClick={event}
      className={classNames(styles.burgerBtn, {
        [styles.active]: sidebarStatus,
      })}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
