import classes from "src/componets/Main/Main.module.css";
import { Links } from "src/componets/Links";
import { Headline } from "src/componets/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
