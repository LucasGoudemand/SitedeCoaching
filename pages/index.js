import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../pages/components/header/Header";
import Footer from "../pages/components/footer/Footer";
import ContainerHeroPage from "../pages/components/heropage/containerHeroPage";
import ContainerApropos from "../pages/components/apropos/containerApropos";
import ContainerDescription from "../pages/components/description/containerDescription";
import ContainerDeroulement from "../pages/components/deroulement/containerDeroulement";
import ContainerOffres from "../pages/components/offres/containerOffres";
import ContainerAvis from "../pages/components/avis/containerAvis";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marine Simoes Coaching</title>
        <meta name="description" content="Site de coaching de Marine Simoes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.containerHeroSection}>
          <header>
            <Header />
          </header>
          <ContainerHeroPage />
        </div>
        <div className={styles.containerMainContent}>
          <section>
            <ContainerApropos />
          </section>
          <section>
            <ContainerDescription />
          </section>
          <section>
            <ContainerDeroulement />
          </section>
          <section>
            <ContainerOffres />
          </section>
          <section>
            <ContainerAvis />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </main>
    </>
  );
}
