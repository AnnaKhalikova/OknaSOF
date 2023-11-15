import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import phone from "../../assets/icons/phone_white.svg";
import support_agent from "../../assets/icons/support_agent.svg";

export const Footer = ({ scrollToForm }) => {
  return (
    <footer className={styles.footer}>
      <NavLink to="/">
        <div className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="OknaSoft logo" />
          <div className={styles.logoText}>
            <h2 className={styles.logoTitle}>OknaSOF</h2>
            <p className={styles.logoSubtitle}>ПВХ окна и двери в Могилеве и Могилевской области</p>
          </div>
        </div>
      </NavLink>
      <div className={styles.contacts}>
        <div className={styles.phone}>
          <img className={styles.contactsImg} src={phone} alt="" />
          <a href="tel:+48536065365">+375 (29) 671-40-04</a>
        </div>
        {/*<button onClick={scrollToForm} className={styles.feedbackBtn}>*/}
        {/*  <img className={styles.contactsImg} src={support_agent} alt="" />*/}
        {/*  <p className={styles.feedbackBtnText}>Заказать обратный звонок</p>*/}
        {/*</button>*/}
      </div>
    </footer>
  );
};
