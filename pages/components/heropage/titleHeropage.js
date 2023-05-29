import styles from "../../../styles/heropage/TitleheroPage.module.css";
import ButtonHeroPage from "../button/buttonHeroPage";

export default function TitleHeroPage() {
  return (
    <>
      <div className={styles.containerText}>
        <h1>Laissez-vous guider vers la meilleure version de vous-même</h1>
        <p>
          Embarquez pour un voyage de découverte de soi et de transformation
          personnelle
        </p>
        <ButtonHeroPage
          Title="Découvrir"
          Icon={
            <span className="material-symbols-outlined">arrow_downward</span>
          }
        ></ButtonHeroPage>
      </div>
    </>
  );
}
