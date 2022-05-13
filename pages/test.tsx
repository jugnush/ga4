import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import * as gtag from "../lib/gtag";

const Test: NextPage = () => {
  const buttonClick = () => {
    gtag.event('button_click', 'Home page button', 'engagement', 1)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Page 2</title>
        <meta name="description" content="POC to test integration with GA4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to page 2!
        </h1>

        <div>
        <Link href="/" passHref>
          <button onClick={buttonClick}>Back to home</button>
        </Link>
        </div>

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Test
