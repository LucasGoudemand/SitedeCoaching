import styles from "../../../styles/offres/Offre.module.css";
import Button from "../button/button";

export default function Offre(props) {
  return (
    <>
      <div className={styles.containerForOneOffre}>
        <h1>{props.Title}</h1>
        <h2>{props.Price}</h2>
        <ul>
          <li>{props.Value1}</li>
          <li>{props.Value2}</li>
          <li>{props.Value3}</li>
          <li>{props.Value4}</li>
        </ul>
        <Button
          Title="Découvrir"
          Icon={
            <span className="material-symbols-outlined">arrow_downward</span>
          }
        ></Button>
      </div>
    </>
  );
}
