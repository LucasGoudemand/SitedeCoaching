import Link from "next/link";
import styles from "../../../styles/footer/Footer.module.css";

export default function Footer() {
  return (
    <>
      <ul className={styles.navbar} id="startAnchor">
        <li>
          <p>Marine Simoes</p>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/marine-simoes-%E2%9C%A8-995a47191/">
            Linkedin
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/openskillsrh/">Instagram</Link>
        </li>
        <li>
          <a href="/contact">Me Contacter</a>
        </li>
      </ul>
    </>
  );
}
