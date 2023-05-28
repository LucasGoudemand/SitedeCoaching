import styles from "../../../styles/heropage/ContainerHeroPage.module.css";
import TitleHeropage from "../heropage/titleHeropage";
import PhotoHeroSection from "../heropage/photoHeroSection";

export default function containerHeroPage() {
  return (
    <>
      <div className={styles.containerHeroPage} id="AccueilAnchor">
        <TitleHeropage />
        <PhotoHeroSection />
      </div>
    </>
  );
}
