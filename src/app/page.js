import styles from './page.module.css'
import Game from '@/components/game.js'

export default function Home() {

  return (
    <main className={styles.main}>
      <h1>20puppy8</h1>
      <Game />
    </main>
  )
}
