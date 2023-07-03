import styles from "./Advantages.module.scss";
import ceny from "../../assets/icons/01.png";
import producja from "../../assets/icons/02.png";
import gwarancja from "../../assets/icons/03.png";
import materialy from "../../assets/icons/04.png";
import podejscie from "../../assets/icons/05.png";
import zespol from "../../assets/icons/06.png";

export const Advantages = ({ advRef }) => {
  return (
    <section ref={advRef} className={styles.advantages}>
      <h2 className={styles.title}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <p className={styles.subtitle}>Почему выбирают нас:</p>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img className={styles.cardImg} src={ceny} alt="" />
          <h3 className={styles.cardTitle}>ХОРОШИЕ ЦЕНЫ</h3>
          <p className={styles.cardSubtitle}>
            Мы ежедневно мониторим рынок и готовы предложить вам лучшую цену.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={producja} alt="" />
          <h3 className={styles.cardTitle}>СОБСТВЕННОЕ ПРОИЗВОДСТВО</h3>
          <p className={styles.cardSubtitle}>
            Мы контролируем каждый этап производства и материалы, используемые для производства.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={gwarancja} alt="" />
          <h3 className={styles.cardTitle}>3 ГОДА ГАРАНТИИ</h3>
          <p className={styles.cardSubtitle}>
            Даем гарантию 3 года на все работы.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={materialy} alt="" />
          <h3 className={styles.cardTitle}>ВЫСОКОКАЧЕСТВЕННЫЕ МАТЕРИАЛЫ</h3>
          <p className={styles.cardSubtitle}>
            Мы проверяем, что покупаем, и несем ответственность за качество фурнитуры и материалов.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={podejscie} alt="" />
          <h3 className={styles.cardTitle}>
            ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ
          </h3>
          <p className={styles.cardSubtitle}>
            Над каждым заказом работают специалисты высокого уровня.
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={zespol} alt="" />
          <h3 className={styles.cardTitle}>ОПЫТНАЯ КОМАНДА МОНТАЖНИКОВ</h3>
          <p className={styles.cardSubtitle}>
            Накопленный нами опыт будет применен к вашему заказу, чтобы эффект радовал вас долгие годы.
          </p>
        </div>
      </div>
    </section>
  );
};
