import Board from "@/components/board";
import Head from "next/head";
import styles from "@/styles/index.module.css";
import Score from "@/components/score";

export default function Home() {
  return (
    <div className={styles.twentypuppyeight}>
      <Head>
        <title>20puppy8</title>
        <meta name="description" content="2048, but with puppies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>20puppy8</h1>
        <Score />
      </header>
      <main>
        <Board />
      </main>
      {/* Footer */}
      {/* <footer>stuf here</footer> */}
    </div>
  );
}
