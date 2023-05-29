import styles from "../../../styles/apropos/Apropos.module.css";
import Image from "next/image";

export default function containerApropos() {
  return (
    <>
      <div className={styles.containerApropos} id="AproposAnchor">
        <Image
          src="/zenimage.png"
          alt="Photo d'illustration"
          className={styles.classImage}
          width={600}
          height={800}
        />
        <div className={styles.text}>
          <h2>A propos</h2>
          <h3>Mon voyage vers ma transformation personnelle.</h3>
          <p>
            {" "}
            En tant que coach professionnelle et praticienne en hypnose
            Ericksonienne, mon parcours de vie a été façonné par des épreuves
            bouleversantes qui ont remis en question mon identité et ma raison
            d'être.
          </p>
          <p>
            J'ai connu un point de rupture il y a quelques années, marqué par
            les hauts et les bas de la vie qui ont laissé des cicatrices
            devenues des obstacles entravant mon potentiel et ma croissance
            personnelle. Perdue et déconnectée de ma véritable essence, j'ai
            ressenti le besoin urgent de changement, de guérison et d'évolution
            pour devenir la meilleure version de moi-même. C'est alors que j'ai
            découvert l'extraordinaire pouvoir transformateur du coaching
            professionnel et de l'hypnose.
          </p>
          <p>
            {" "}
            Ces outils m'ont fascinée en leur capacité à révéler les potentiels
            les plus profonds des individus, en débloquant des parties de
            moi-même négligées ou oubliées. Ils ont radicalement transformé ma
            perception de moi-même et du monde qui m'entoure. Mon voyage de
            guérison et de découverte personnelle m'a conduit à ressentir le
            besoin de transmettre ces nouvelles compétences.
          </p>
          <p>
            Désormais, je consacre ma vie à aider les autres à surmonter leurs
            propres défis et à réaliser leur plein potentiel. Mon objectif est
            de vous guider à travers les tempêtes de la vie, de vous fournir les
            outils nécessaires pour devenir la meilleure version de vous-même et
            de vous reconnecter à votre essence véritable, tout en cultivant un
            bien-être durable. Chaque jour, je puise mon inspiration dans les
            transformations que j'observe chez mes clients. Leur courage, leur
            détermination et leur volonté de changement sont pour moi une source
            de motivation inépuisable.
          </p>
        </div>
      </div>
    </>
  );
}
