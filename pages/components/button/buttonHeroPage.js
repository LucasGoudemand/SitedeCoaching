import styles from "../../../styles/button/Button.module.css";
import Link from "next/link";

export default function ButtonHeroPage(props) {
  return (
    <>
      <Link href="#AproposAnchor" className={styles.button}>
        {props.Title}
        {props.Icon}
      </Link>
    </>
  );
}
