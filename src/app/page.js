import styles from './page.module.css'

// let firstRow = [0, 0, 0, 0]
// let secondRow = [0, 0, 0, 0]
// let thirdRow = [0, 0, 0, 0]
// let fourthRow = [0, 0, 0, 0]
let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

// function to set a value to either 2 or 4
let getNewNumber = () => {
  // Randomly generate a 0 or 1
  //  - if random generated number is a 0, the value of the square is a 2
  //  - if random generated number is a 1, the value of the square is a 4
  let randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    return 2;
  }
  else {
    return 4;
  }
}

// function to set a board space to a value
let setTileValue = (position, value) => {
  grid[position[0]][position[1]] = value;
}

// function to randomly set an empty board space to a value of 2 or 4
let assignEmptyTile = () => {
  let emptyTileFound = false;
  let xCoord;
  let yCoord;

  // repeatedly attempt to find a position on the grid that is empty
  while (!emptyTileFound) {
    xCoord = Math.floor(Math.random() * 4);
    yCoord = Math.floor(Math.random() * 4);

    if (grid[xCoord][yCoord] === 0) {
      emptyTileFound = true;
    }
  }

  // once empty tile is found, assign it a value of 2 or 4
  setTileValue([xCoord, yCoord], getNewNumber);

}

// function to initialize board (determine first two tiles and their values)
let initializeBoard = () => {
  assignEmptyTile();
  assignEmptyTile();
}

// function to merge two spaces if they are adjacent and the same value

// function to shift spaces up

// function to shift spaces down

// function to shift spaces left

// function to shift spaces right

// NOTES:
//    - somehow keep track of empty coordinates - repeatedly doing random and checking if value is 0 is silly

export default function Home() {
  initializeBoard();

  return (
    <main className={styles.main}>
      <h1>20puppy8</h1>

      {/* grid */}
      <div className={styles.grid}>
        <div className={styles.row}>
          <div className={styles.tile}>{grid[0][0]}</div>
          <div className={styles.tile}>{grid[0][1]}</div>
          <div className={styles.tile}>{grid[0][2]}</div>
          <div className={styles.tile}>{grid[0][3]}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.tile}>{grid[1][0]}</div>
          <div className={styles.tile}>{grid[1][1]}</div>
          <div className={styles.tile}>{grid[1][2]}</div>
          <div className={styles.tile}>{grid[1][3]}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.tile}>{grid[2][0]}</div>
          <div className={styles.tile}>{grid[2][1]}</div>
          <div className={styles.tile}>{grid[2][2]}</div>
          <div className={styles.tile}>{grid[2][3]}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.tile}>{grid[3][0]}</div>
          <div className={styles.tile}>{grid[3][1]}</div>
          <div className={styles.tile}>{grid[3][2]}</div>
          <div className={styles.tile}>{grid[3][3]}</div>
        </div>
      </div>
    </main>
  )
}
