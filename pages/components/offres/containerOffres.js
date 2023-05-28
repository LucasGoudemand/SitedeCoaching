import styles from "../../../styles/offres/ContainerOffres.module.css";
import Offre from "../offres/Offre";

export default function containerOffres(props) {
  return (
    <>
      <div className={styles.containerOffresTitle} id="DescriptionAnchor">
        <h2>Prestations</h2>
        <h3>Choisissez votre séance</h3>
      </div>
      <div className={styles.containerOffres}>
        <div className={styles.containerOffre1}>
          <div className={styles.containerOffre1Background}></div>
          <Offre
            Title="Hypnose Ericksonienne"
            Price="70€"
            Value1="Méthode novatrice et personnalisée"
            Value2="Résolution des problèmes à la source "
            Value3="Accompagnement expert"
            Value4="Complémentarité de l'hypnose éricksonienne et de la PNL"
          />
        </div>
        <div className={styles.containerOffre2}>
          <div className={styles.containerOffre2Background}></div>
          <Offre
            Title="Programmation Neuro-Linguistique"
            Price="70€"
            Value1="Déverrouillez votre potentiel"
            Value2="Changements positifs immédiats et durables"
            Value3="Transformation des obstacles en opportunités "
            Value4="Intégration pratique dans votre vie quotidienne"
          />
        </div>
        <div className={styles.containerOffre3}>
          <div className={styles.containerOffre3Background}></div>
          <Offre
            Title="Pack 5 séances  20% de Reduction"
            Price="280€"
            Value1="Approfondissement des résultats"
            Value2="Progression continue"
            Value3="Exploration approfondie des ressources intérieures"
            Value4="Renforcement des changements"
          />
        </div>
      </div>
    </>
  );
}
