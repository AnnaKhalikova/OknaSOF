import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ type, isLoading, btnText, event }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      disabled={isLoading ? true : false}
      onClick={event}
      className={classNames(
        styles.btn,
        {
          [styles.loading]: isLoading,
        },
        { [styles.formBtn]: type === "submit" }
      )}
    >
      <p className={styles.btnText}>{btnText}</p>
    </button>
  );
};
