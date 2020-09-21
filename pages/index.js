import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peiting's Maze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Peiting's Maze!</a>
        </h1>

        <p className={styles.description}>
          Get started by taking{' '}
          <code className={styles.code}>a piece of tableware!</code>
        </p>

        <div className={styles.grid}>
          <Link href="/learning">
            <a className={styles.card}>
              <h3>Learning Documentations &rarr;</h3>
              <p>what i learn from mysterious cubic.</p>
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.card}>
              <h3>About &rarr;</h3>
              <p>About Me.</p>
            </a>
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
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
