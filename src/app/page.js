import Image from 'next/image'
import styles from './page.module.css'

let firstRow = [0, 0, 0, 0]
let secondRow = [0, 0, 0, 0]
let thirdRow = [0, 0, 0, 0]
let fourthRow = [0, 0, 0, 0]

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>20puppy8</h1>

      {/* grid */}
      <div className={styles.grid}>
        <div className={styles.row}>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
        </div>
      </div>

    </main>
  )
}
