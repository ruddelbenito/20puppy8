import styles from './page.module.css'

let firstRow = [0, 0, 0, 0]
let secondRow = [0, 0, 0, 0]
let thirdRow = [0, 0, 0, 0]
let fourthRow = [0, 0, 0, 0]

// function to set a board space to a value

// function to randomly set an empty board space to a value of 2 or 4

// function to initialize board (determine first two tiles and their values)

// function to merge two spaces if they are adjacent and the same value

// function to shift spaces up

// function to shift spaces down

// function to shift spaces left

// function to shift spaces right

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
