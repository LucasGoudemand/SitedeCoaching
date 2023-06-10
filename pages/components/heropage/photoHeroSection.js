import styles from "../../../styles/heropage/PhotoHeroSection.module.css";
import Image from "next/image";
import Tags from "../tags/Tags";

export default function PhotoHeroSection() {
  return (
    <>
      <div className={styles.containerImage}>
        <Image
          src="/marineheropage.png"
          alt="Photo de Marine Simoes"
          className={styles.marineImage}
          width={500}
          height={500}
        />
        <div className={styles.containerTag1}>
          <img className={styles.Img} src="/mains.png" alt="Image du tag" />
          Coaching PNL
        </div>
        <div className={styles.containerTag2}>
          <img className={styles.Img} src="/monsieur.png" alt="Image du tag" />
          Hypnose Ericksonienne
        </div>
        <div className={styles.containerTag3}>
          <img className={styles.Img} src="/tete.png" alt="Image du tag" />
          Certifications
        </div>
      </div>
    </>
  );
}
