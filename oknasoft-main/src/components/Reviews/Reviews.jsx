import { useRef } from "react";
import styles from "./Reviews.module.scss";
import Slider from "react-slick";
import image from "../../assets/images/reviews.svg";
import { Rating } from "primereact/rating";

export const Reviews = ({ revRef }) => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      author: "Анна",
      star: 5,
      text: "Добрый день! Заказывали остекление крыльца. Все быстро и качественно, приятные цены по рынку, минимальные сроки изготовления.",
    },
    {
      author: "Раиса",
      star: 5,
      text: "Здравствуйте! Мой отзыв на работу мастера - 5 баллов. Мастер оперативно приехал на замер балкона. Изготовили, привезли и установили за неделю, мастер Андрей - золото, починил еще дополнительно балконную дверь и окно, установленную другой компанией, хотя я обращалась в другие компании и мне говорили, что скорее всего нужно будет менять дверь. Еще раз спасибо за отзывчивость и исполнительность! ",
    },
    {
      author: "Александр",
      star: 5,
      text: "Всем привет! Заказывал окна в частный дом, порадовало, что не пришлось даже возиться с внешней отделкой, просто заказл у мастера и теперь красота как снаружи, так и внутри! Круто, мастеру Андрею респект и 5 звезд!",
    }
  ];

  return (
    <section ref={revRef} className={styles.reviews}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <span style={{ color: "var(--green)" }}>РЕАЛЬНЫЕ ОТЗЫВЫ</span>
          <br />
          КЛИЕНТЫ О НАШЕЙ РАБОТЕ
        </h2>
        <img src={image} className={styles.img} alt="" />
      </div>

      <Slider className={styles.slider} {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className={styles.rewiev} key={index}>
            <div className={styles.rewievHead}>
              <p className={styles.author}>{slide.author}</p>
              <Rating value={slide.star} readOnly cancel={false} />
            </div>
            <p className={styles.text}>{slide.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
