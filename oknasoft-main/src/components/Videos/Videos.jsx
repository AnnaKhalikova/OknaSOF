import styles from "./Videos.module.scss";
import Slider from "react-slick";
import video from "../../assets/images/andrew-video.mp4";

export const Videos = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
        },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  const slides = [
    { src: video }
  ];

  return (
    <section className={styles.works}>
      <h2 className={styles.title}>
        <span style={{ color: "var(--green)" }}>ВИДЕО</span> НАШЕЙ РАБОТЫ
      </h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <video
            key={index}
            className={styles.vid}
            class="video-new"
            preload="auto"
            no-controls
            autoPlay
            muted
            loop
            style="width:70% margin:auto"
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ))}
      </Slider>
    </section>
  );
};
