import Link from "next/link";
import styles from "../../../styles/header/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.containerNav}>
        <ul className={styles.navbar} id="startAnchor">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/#AproposAnchor">A propos</a>
          </li>
          <li>
            <a href="/#DescriptionAnchor">Préstations</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
