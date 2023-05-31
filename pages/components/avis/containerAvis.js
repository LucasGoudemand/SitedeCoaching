import styles from "../../../styles/avis/ContainerAvis.module.css";
import Avis from "../avis/Avis";

export default function containerAvis(props) {
  return (
    <>
      <div className={styles.containerAvis}>
        <h2>Ils ont étés coachés.</h2>
        <div className={styles.containerForAllAvis}>
          <Avis
            Name="Charlène"
            AvisText="En deux séances d'hypnose j'ai pu résoudre ma problématique et gagner confiance en moi. Merci Marine"
          />
          <Avis
            Name="Anne-Laure"
            AvisText="Marine est très bienveillante et nos séances m'ont fait beaucoup de bien"
          />
          <Avis
            Name="Stéphane"
            AvisText="Grâce aux séances de coaching et à la méthode PNL j'ai pu résoudre des problématiques professionnelles. Un grand merci à Marine."
          />
          <Avis
            Name="Marina"
            AvisText="Marine a une voix très douce et apaisante, je me suis sentie en totale confiance avec elle."
          />
          <Avis
            Name="Alexandre"
            AvisText="Je recommande Marine avec qui j'ai fait 2 séances en visio qui m'ont beaucoup de bien. Je me sens plus apaisé."
          />
          <Avis
            Name="Grégory"
            AvisText="Je recommande Marine pour son professionnalisme."
          />
          <Avis
            Name="Elodie"
            AvisText="Grâce aux séances d'hypnose je me sens plus joyeuse et apaisée dans ma vie.
            Les séances font du bien, et m'ont fait prendre conscience de beaucoup de choses."
          />
        </div>
      </div>
    </>
  );
}
