import styles from "./Videos.module.scss";
import Slider from "react-slick";
import video from "../../assets/head_video.mp4";

export const Videos = () => {
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
    { src: video },
    { src: video },
    { src: video },
    { src: video },
  ];

  return (
    <section className={styles.works}>
      <h2 className={styles.title}>
        <span style={{ color: "var(--green)" }}>WIDEO</span> NASZEJ PRACY
      </h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <video
            key={index}
            className={styles.video}
            preload="auto"
            no-controls
            autoPlay
            muted
            loop
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ))}
      </Slider>
    </section>
  );
};
