import { useRef } from "react";
import styles from "./Works.module.scss";
import Slider from "react-slick";
import empty from "../../assets/icons/photos.png";

export const Works = ({ worksRef }) => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
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
    { src: empty, alt: "photo" },
    { src: empty, alt: "photo" },
    { src: empty, alt: "photo" },
    { src: empty, alt: "photo" },
    { src: empty, alt: "photo" },
  ];

  return (
    <section ref={worksRef} className={styles.works}>
      <h2 className={styles.title}>
        <span style={{ color: "var(--green)" }}>ФОТО</span> НАШИХ РАБОТ
      </h2>

      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <img
            className={styles.img}
            key={index}
            src={slide.src}
            alt={slide.alt}
          />
        ))}
      </Slider>
    </section>
  );
};
