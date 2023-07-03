import { Header } from "../../components/Header/Header";

import { Footer } from "../../components/Footer/Footer";

import { Circle } from "../../components/ui/Circle/Circle";
import { ScrollTo } from "../../components/ui/ScrollTo/ScrollTo";

import styles from "./Layout.module.scss";
import { useRef } from "react";
import { HomePage } from "../../pages/HomePage/HomePage";

export const Layout = () => {
  const advRef = useRef();
  const worksRef = useRef();
  const revRef = useRef();
  const formRef = useRef();
  const calcRef = useRef();

  const scrollToAdv = () => {
    advRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalc = () => {
    calcRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRev = () => {
    revRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <Header
        scrollToAdv={scrollToAdv}
        scrollToWorks={scrollToWorks}
        scrollToRev={scrollToRev}
        scrollToForm={scrollToForm}
        scrollToCalc={scrollToCalc}
      />
      <main>
        <HomePage
          formRef={formRef}
          advRef={advRef}
          calcRef={calcRef}
          worksRef={worksRef}
          revRef={revRef}
        />
        <Circle />
        <ScrollTo />
      </main>
      <Footer scrollToForm={scrollToForm} />
    </div>
  );
};
