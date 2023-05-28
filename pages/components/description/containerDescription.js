import styles from "../../../styles/description/Description.module.css";
import DescriptionBlock from "../description/Description";

export default function containerDescription() {
  return (
    <>
      <div className={styles.containerDescription}>
        <div className={styles.Title}>
          <h2>Les approches que j'utilise</h2>
          <p>
            L’hypnose Ericksonnienne et la Programmation Neuro-Linguistique sont
            mes deux outils de predilection pour pour vous permetre d’être enfin
            vous même et de vivre votre véritable vie.
          </p>
        </div>
        <div className={styles.containerBlock}>
          <div className={styles.containerBackground}></div>
          <DescriptionBlock
            ImageBlock="/imageblock1.png"
            Title="Hypnose Ericknosienne"
            SmallTitle="Découvrez la puissance de l'Hypnose"
            TextContent="Découvrez l'hypnose éricksonienne, une approche thérapeutique puissante qui transforme votre vie. Inspirée par Milton H. Erickson, cette méthode novatrice met votre bien-être au centre et réveille vos ressources intérieures pour des résultats extraordinaires. Elle libère le stress, l'anxiété et autres problèmes, vous permettant de vivre une vie confiante et réussie. En quelques séances, elle résout les problèmes à leur source, créant des changements durables pour atteindre vos objectifs audacieux. En tant que praticienne experte, je vous guide dans ce voyage extraordinaire pour dévoiler votre plein potentiel. Choisissez de vous épanouir et de créer la vie épanouissante que vous désirez. Prenez le contrôle et soyez surpris par vos incroyables résultats."
          />
          <DescriptionBlock
            ImageBlock="/imageblock2.png"
            Title="Programmation Neuro-Linguistique"
            SmallTitle="Découvrez votre potentiel illimité"
            TextContent="La PNL (Programmation Neuro-Linguistique) est une méthode puissante pour comprendre l'esprit humain et créer des changements durables. En tant que coach spécialisée en PNL, mon objectif est de libérer votre potentiel illimité et vous aider à atteindre vos objectifs de vie. La PNL explore les liens entre l'esprit, le langage et les comportements, offrant des outils concrets pour des changements positifs immédiats. Vous renforcerez votre confiance en vous, surmonterez les obstacles, améliorerez la communication et atteindrez vos objectifs. Le coaching en PNL va au-delà des résultats à court terme, en vous donnant des compétences et des connaissances pour la vie. Ensemble, nous transformerons les obstacles en opportunités, vous offrant un chemin vers l'épanouissement personnel et la réussite."
          />
        </div>
      </div>
    </>
  );
}
