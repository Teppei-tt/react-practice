import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../componets/Footer";
import { Main } from "../componets/Main";
import { Header } from "../componets/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    e.preventDefault.href = "";
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
