'use client'

import styles from './game.module.css'
import { useState, useEffect } from 'react'

function Game() {
    const [grid, setGrid] = useState([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);

    function checkKey(e) {

        if (e.keyCode == '38' || e.keyCode == '87') {
            console.log('up');
        }
        else if (e.keyCode == '40' || e.keyCode == '83') {
            console.log('down');
        }
        else if (e.keyCode == '37' || e.keyCode == '65') {
            console.log('left');
            moveLeft();
        }
        else if (e.keyCode == '39' || e.keyCode == '68') {
            console.log('right');
        }
    }

    // function to set a value to either 2 or 4
    let getNewNumber = () => {
        // Randomly generate a 0 or 1
        //  - if random generated number is a 0, the value of the square is a 2
        //  - if random generated number is a 1, the value of the square is a 4
        let randomNumber = Math.floor(Math.random() * 2);

        return (randomNumber === 0 ? 2 : 4)
    }

    // function to set a board space to a value
    let setTileValue = (position, value) => {
        let tempGrid = [...grid];
        tempGrid[position[0]][position[1]] = value;
        setGrid(tempGrid);
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
        // console.log(`grid: ${xCoord}, ${yCoord}`)
        setTileValue([xCoord, yCoord], getNewNumber());

    }

    // function to initialize board (determine first two tiles and their values)
    let initializeBoard = () => {
        assignEmptyTile();
        assignEmptyTile();
    }

    // function to shift spaces up
    let moveUp = () => {

    }

    // function to shift spaces down
    let moveDown = () => {

    }

    // function to shift spaces left
    let moveLeft = () => {
        grid.forEach((row) => {
            // console.log(row);
            let emptySpace = -1;
            let currentNonEmptyTile = -1;
            row.forEach((value, index) => {
                // mark the leftmost empty tile
                // mark the value of current non-empty tile
                // check current tile
                //      - if empty and not the current marked empty tile, skip and go to next
                //      - if not empty, 
            })
        });
    }

    // function to shift spaces right
    let moveRight = () => {

    }

    // function to merge two spaces if they are beside each other

    // NOTES:
    //    - somehow keep track of empty coordinates - repeatedly doing random and checking if value is 0 is silly

    // initialize board on game start
    useEffect(() => {
        // console.log('hello, the page just loaded for the first time');
        initializeBoard();
    }, []);

    return (
        <div
            className={styles.game}
            onKeyDown={(e) => checkKey(e)}
            tabIndex={-1}
        >
            <h1>20puppy8</h1>
            {grid.map((row, rowIndex) => {
                return (
                    <div className={styles.row} key={`${rowIndex}`}>
                        {row.map((square, squareIndex) => {
                            return (
                                <div className={styles.square} key={`${rowIndex}-${squareIndex}`}>
                                    <p>{grid[rowIndex][squareIndex]}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Game;