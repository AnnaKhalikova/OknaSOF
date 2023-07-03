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
      author: "author name",
      star: 4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem distinctio corrupti, error vero ratione provident vitae optio laudantium sapiente iste, commodi quas doloremque iusto temporibus sit blanditiis dolor cupiditate?",
    },
    {
      author: "author name",
      star: 5,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem distinctio corrupti, error vero ratione provident vitae optio laudantium sapiente iste, commodi quas doloremque iusto temporibus sit blanditiis dolor cupiditate?",
    },
    {
      author: "author name",
      star: 5,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus rem distinctio corrupti, error vero ratione provident vitae optio laudantium sapiente iste, commodi quas doloremque iusto temporibus sit blanditiis dolor cupiditate?",
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
