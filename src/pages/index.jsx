import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../componets/Footer";
import { Main } from "../componets/Main";
import { Header } from "../componets/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
