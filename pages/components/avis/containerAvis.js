import styles from "../../../styles/avis/ContainerAvis.module.css";
import Avis from "../avis/Avis";

export default function containerAvis(props) {
  return (
    <>
      <div className={styles.containerAvis}>
        <h2>Ils ont étés coachés.</h2>
        <div className={styles.containerForAllAvis}>
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
          <Avis
            Name="Crystel"
            AvisText="J'adore le coaching de Marine, elle a pris le temps de m'expliquer les choses et j'en suis changé "
          />
        </div>
      </div>
    </>
  );
}
