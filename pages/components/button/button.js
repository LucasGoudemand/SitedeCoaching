import styles from "../../../styles/button/Button.module.css";
import Link from "next/link";

export default function Button(props) {
  return (
    <>
      <Link
        href="https://www.crenolib.fr/prendre-rdv/79586_praticiennne-en-hypnose-ericksonienne-et-coach"
        className={styles.button}
      >
        {props.Title}
        {props.Icon}
      </Link>
    </>
  );
}
