import styles from "../../../styles/description/DescriptionBlock.module.css";
import Image from "next/image";

export default function DescriptionBlock(props) {
  return (
    <>
      <div className={styles.containerBlockComponent}>
        <Image
          width={400}
          height={250}
          src={props.ImageBlock}
          alt="Photo d'un block'"
          className={styles.blockImage}
        />
        <div className={styles.TextBlock}>
          <h3>{props.Title}</h3>
          <p>{props.SmallTitle}</p>
          <p>{props.TextContent}</p>
        </div>
      </div>
    </>
  );
}
