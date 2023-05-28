import styles from "../../../styles/deroulement/Deroulement.module.css";

export default function containerDeroulement() {
  return (
    <>
      <div className={styles.containerDeroulement}>
        <h3>Le déroulement d'une séance</h3>
        <ul className={styles.ulClass}>
          <li>
            <strong> Accueil et évaluation </strong>: Je vous accueille dans un
            environnement respectueux et discutons de vos besoins, objectifs et
            attentes pour définir le but de la séance.
          </li>
          <li>
            <strong>Explication et introduction </strong>: Si c'est votre
            première séance, je vous explique l'hypnose éricksonienne, la PNL et
            comment elles vous aident à atteindre vos objectifs.
          </li>
          <li>
            <strong>Induction et état modifié de conscience </strong>: Après
            votre préparation, je vous guide vers une relaxation profonde en
            utilisant des techniques de respiration et de visualisation, créant
            un état propice au travail thérapeutique.
          </li>

          <li>
            <strong>Travail thérapeutique et coaching </strong> : Dans cet état
            modifié de conscience, nous explorons vos ressources, identifions
            les obstacles et développons de nouvelles stratégies à l'aide de
            suggestions, métaphores et techniques de PNL.
          </li>
          <li>
            <strong>Exercices pratiques et intégration </strong>: Je présente
            des exercices PNL tels que la visualisation, la reformulation et la
            fixation d'objectifs, favorisant le changement et la réflexion pour
            les intégrer dans votre vie quotidienne.
          </li>
          <li>
            <strong>Suivi et plan d'action </strong>: Après la séance, je suis
            disponible pour répondre à vos questions. Ensemble, nous élaborons
            un plan d'action concret pour continuer à progresser vers vos
            objectifs en utilisant l'hypnose éricksonienne ou la PNL.
          </li>
        </ul>
        <h4>
          Ces points communs entre l'hypnose éricksonienne et la PNL montrent
          comment les deux approches peuvent être complémentaires pour vous
          aider à explorer vos ressources intérieures, surmonter les obstacles
          et réaliser les changements souhaités.
        </h4>
      </div>
    </>
  );
}
