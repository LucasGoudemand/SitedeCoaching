import styles from "../../../styles/deroulement/Deroulement.module.css";

export default function containerDeroulement() {
  return (
    <>
      <div className={styles.containerDeroulement}>
        <h3>Le déroulement d'une séance</h3>
        <ul className={styles.ulClass}>
          <li>
            <strong> Notre première rencontre </strong>: Nous discutons de vos
            besoins, attentes et des objectifs que vous souhaitez atteindre dans
            un cadre bienveillant.
          </li>
          <li>
            <strong>Explication et introduction </strong>: Nous validons
            ensemble la méthode la plus adaptée pour atteindre vos objectifs.
          </li>
          <li>
            <strong>Hypnose Ericksonienne </strong>: je vous guide vers une
            relaxation profonde en utilisant des techniques de respiration et de
            visualisation, créant un état propice au travail thérapeutique.
          </li>

          <li>
            <strong>Coaching PNL </strong>: Plusieurs exercices peuvent être
            proposés tels que la visualisation, la reformulation et la fixation
            d'objectifs, favorisant le changement et la réflexion. Je vous aide
            à changer votre regard sur la situation en activant vos propres
            solutions.
          </li>
          <li>
            <strong>Suivi et plan d'action </strong>: Après la séance, je suis
            disponible pour répondre à vos questions. Ensemble, nous élaborons
            un plan d'action concret pour continuer à progresser vers vos
            objectifs.
          </li>
        </ul>
        <h4>
          Ces deux approches sont complémentaires pour vous aider à explorer vos
          ressources intérieures, surmonter les obstacles et réaliser les
          changements souhaités.
        </h4>
      </div>
    </>
  );
}
