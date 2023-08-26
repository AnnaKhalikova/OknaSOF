import { useRef } from "react";
import styles from "./Works.module.scss";
import Slider from "react-slick";
import livingRoom from "../../assets/images/photo_2023-07-29_23-12-10.png";
import kitchen from "../../assets/images/photo_2023-07-29_23-12-38.png";
import bedroom from "../../assets/images/photo_2023-07-29_23-12-49.png";

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
    { src: livingRoom, alt: "livingRoom" },
    { src: kitchen, alt: "kitchen" },
    { src: bedroom, alt: "bedroom" },
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
