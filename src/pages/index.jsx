import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../componets/Footer";
import { Main } from "../componets/Main";
import { Header } from "../componets/Header";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}