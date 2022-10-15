import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../componets/Footer";
import { Links } from "../componets/Links";
import Headline from "../componets/Headline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline page="index" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
