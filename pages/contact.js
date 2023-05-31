import Head from "next/head";
import HeaderContact from "../pages/components/header/headerContact";
import styles from "../styles/contact/Contact.module.css";
import Button from "../pages/components/button/button";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Marine Simoes Coaching</title>
        <meta name="description" content="Site de coaching de Marine Simoes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <HeaderContact />
        </header>
        <section>
          <div className={styles.containerContact}>
            <h1>Reservez votre coaching avec Crénolib</h1>
            <Button
              Title="Crénolib"
              Icon={
                <span className="material-symbols-outlined">
                  arrow_downward
                </span>
              }
            ></Button>
            <p>OU</p>
            <h2>Laissez moi un message</h2>
          </div>
        </section>
        <footer></footer>
      </main>
      <script
        type="text/javascript"
        src="https://form.jotform.com/jsform/231472982350356"
      ></script>
    </>
  );
}
