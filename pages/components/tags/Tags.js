import styles from "../../../styles/tags/Tags.module.css";

export default function Tags(props) {
  return (
    <>
      <div className={styles.containerTag}>
        <img className={styles.Img} src={props.Image} alt="Image du tag" />
        {props.Text}
      </div>
    </>
  );
}
