import styles from "./ScrollTo.module.scss";

import ScrollToTop from "react-scroll-to-top";
import { ScrollArrow } from "../Arrows/ScrollArrow";

export const ScrollTo = () => {
  return (
    <ScrollToTop
      smooth
      top={600}
      component={<ScrollArrow />}
      className={styles.scrollTo}
    />
  );
};
