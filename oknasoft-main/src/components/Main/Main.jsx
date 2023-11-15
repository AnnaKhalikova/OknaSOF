import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
          OknaSOF <br />
        <span style={{ color: "#fff" }}>Окна и двери ПВХ</span><br />
        <span style={{ color: "#fff" }}>Работаем в Могилеве и области</span><br /><br />
        <span style={{ color: "#fff" }}>+375 (29) 671-40-04</span><br /><br />
      </h1>
      <p className={styles.subtitle}>От производителя</p>
      <p className={styles.listTitle}>
          Изготовление и установка окон и дверей ПВХ любой сложности под ключ для:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>Окна в квартиру</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>Окна в частный дом</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>Отстекление балконов и лоджий</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>Остекление веранды и крыльца</span>
        </li>
        <li className={styles.listItem}>
          <i
            className="pi pi-check"
            style={{ color: "var(--green)", marginRight: "10px" }}
          ></i>
          <span>Двери ПВХ</span>
        </li>
      </ul>
    </div>
  );
};
