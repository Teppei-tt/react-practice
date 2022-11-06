import styles from "../styles/Home.module.css";
import { Links } from "../componets/Links";
import { Headline } from "../componets/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
