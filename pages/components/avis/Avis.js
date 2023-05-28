import styles from "../../../styles/avis/Avis.module.css";

export default function Avis(props) {
  return (
    <>
      <div className={styles.containerOfOneAvis}>
        <p>{props.Name}</p>
        <p>{props.AvisText}</p>
        <div className={styles.containerStars}>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
        </div>
      </div>
    </>
  );
}
