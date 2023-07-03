import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import phone from "../../assets/icons/phone.svg";
import support_agent from "../../assets/icons/support_agent.svg";

export const Sidebar = ({
  isActive,
  setIsActive,
  scrollToForm,
  scrollToAdv,
  scrollToRev,
  scrollToWorks,
  scrollToCalc,
}) => {
  return (
    <div
      onClick={() => setIsActive(false)}
      className={classNames(styles.sidebar, {
        [styles.active]: isActive,
      })}
    >
      <nav className={styles.sidebarList}>
        <div className={styles.phone}>
          <img className={styles.contactsImg} src={phone} alt="" />
          <a href="tel:+375296714004">+375 (29) 671-40-04</a>
        </div>

        <button onClick={scrollToForm} className={styles.feedbackBtn}>
          <img className={styles.contactsImg} src={support_agent} alt="" />
          <p className={styles.feedbackBtnText}>Заказать обратный звонок</p>
        </button>
        <button onClick={scrollToAdv} className={styles.sidebarItem}>
          НАШИ ПРЕИМУЩЕСТВА
        </button>
        <button onClick={scrollToCalc} className={styles.sidebarItem}>
          РАСЧЕТ СТОИМОСТИ
        </button>
        <button onClick={scrollToWorks} className={styles.sidebarItem}>
          НАШИ РАБОТЫ
        </button>
        <button onClick={scrollToRev} className={styles.sidebarItem}>
          ОТЗЫВЫ КЛИЕНТОВ
        </button>
      </nav>
    </div>
  );
};
