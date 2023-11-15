import { Advantages } from "../../components/Advantages/Advantages";
import { Calculator } from "../../components/Calculator/Calculator";
import { Consult } from "../../components/Consult/Consult";
import { Final } from "../../components/Final/Final";
import { Form } from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import { Reviews } from "../../components/Reviews/Reviews";
import { Videos } from "../../components/Videos/Videos";
import { Works } from "../../components/Works/Works";
import styles from "./HomePage.module.scss";

export const HomePage = ({ advRef, worksRef, revRef, formRef, calcRef }) => {
  //   useDocumentTitle("Qbite - Студия веб-разработки и маркетинга");

  return (
    <>
      <Main />
      {/*<Consult />*/}
      <Advantages advRef={advRef} />
      {/*<Calculator calcRef={calcRef} />*/}
      <Works worksRef={worksRef} />
      <Videos />
      <div className={styles.wrapper}>
        {/*<Form formRef={formRef} />*/}
        <Reviews revRef={revRef} />
        {/*<Final />*/}
      </div>
    </>
  );
};
