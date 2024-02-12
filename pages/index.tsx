import Board from "@/components/board";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>20puppy8</title>
        <meta name="description" content="2048, but with puppies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Board />
      </main>
    </>
  );
}
