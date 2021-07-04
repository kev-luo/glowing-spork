import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [display, setDisplay] = useState(false);

  const handleHover = (img, e) => {
    const isMouseEnter = e.type === "mouseenter";
    setDisplay((display) => {
      return {
        ...display,
        [img]: isMouseEnter,
      };
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Big D TBD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
