'use client'

import styles from './game.module.css'
import { useState, useEffect } from 'react'

function Game() {
    const [grid, setGrid] = useState([[4, 2, 2, 8], [4, 0, 0, 0], [0, 0, 16, 0], [0, 2, 0, 2]]);

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
        grid.forEach((row, rowIndex) => {
            console.log(`row: ${rowIndex}`)
            let leftmostEmptySpace = -1;
            let leftmostNonZeroSpace = -1;
            let leftmostNonZeroSpaceValue = -1;

            for (let spaceIndex = 0; spaceIndex < row.length; spaceIndex++) {
                console.log(`current space: ${spaceIndex}`)

                // if the current space is empty
                if (row[spaceIndex] === 0) {
                    // check if an empty space needs to be marked
                    if (leftmostEmptySpace === -1) {
                        leftmostEmptySpace = spaceIndex;
                    }
                }
                // if the current space is not empty
                else {
                    // if there is no marked non-zero space yet
                    if (leftmostNonZeroSpace === -1) {
                        // if the current non-zero space can be moved to an empty spot, do so
                        if (leftmostEmptySpace !== -1) {
                            setTileValue([rowIndex, leftmostEmptySpace], row[spaceIndex])
                            leftmostNonZeroSpace = leftmostEmptySpace;
                            leftmostNonZeroSpaceValue = row[spaceIndex];
                            // clear the current space
                            setTileValue([rowIndex, spaceIndex], 0);
                            // increment leftmost empty space by 1 if not at the end of row
                            leftmostEmptySpace++;
                        }
                        else {
                            leftmostNonZeroSpace = spaceIndex;
                            leftmostNonZeroSpaceValue = row[spaceIndex];
                        }
                    }
                    // if a marked non-zero space exists
                    else {
                        // if the marked non-zero space and current space have the same value
                        if (leftmostNonZeroSpaceValue === row[spaceIndex]) {
                            leftmostNonZeroSpaceValue = leftmostNonZeroSpaceValue * 2;
                            // double the leftmost non-zero space tile
                            setTileValue([rowIndex, leftmostNonZeroSpace], leftmostNonZeroSpaceValue);
                            // clear the current space
                            setTileValue([rowIndex, spaceIndex], 0);
                            // if a marked space does not exist, set leftmost empty space to leftmost non-zero space + 1
                            // if a marked space already exists, leave it
                            if (leftmostEmptySpace === -1) {
                                leftmostEmptySpace = leftmostNonZeroSpace + 1;
                            }
                            // if a merge occurs, a merge with this new value can no longer be performed in this one move
                            // therefore, reset non-zero value
                            leftmostNonZeroSpace = -1;
                            leftmostNonZeroSpaceValue = -1;
                        }
                        // if the marked non-zero space and current space have different values
                        else {
                            // if a marked empty space exists
                            if (leftmostEmptySpace !== -1) {
                                // set new leftmost non-zero space and its value
                                leftmostNonZeroSpace = leftmostEmptySpace;
                                leftmostNonZeroSpaceValue = row[spaceIndex];
                                // move current space to empty space
                                setTileValue([rowIndex, leftmostEmptySpace], row[spaceIndex]);
                                // clear current space
                                setTileValue([rowIndex, spaceIndex], 0);
                                // increment leftmost empty space by 1;
                                leftmostEmptySpace++;
                            }
                            // if no marked empty space exists, set leftmost non-zero space to current space
                            else {
                                leftmostNonZeroSpace = spaceIndex;
                                leftmostNonZeroSpaceValue = row[spaceIndex];
                            }
                        }
                    }
                }
                console.log(`current leftmostEmptySpace: ${leftmostEmptySpace}`)
                console.log(`current leftmostNonZeroSpace: ${leftmostNonZeroSpace}`)
                console.log(`current leftmostNonZeroSpaceValue: ${leftmostNonZeroSpaceValue}`)
            };

            console.log(`leftmostEmptySpace: ${leftmostEmptySpace}`)
            console.log(`leftmostNonZeroSpace: ${leftmostNonZeroSpace}`)
            console.log(`leftmostNonZeroSpaceValue: ${leftmostNonZeroSpaceValue}`)
        });
    }

    // function to shift spaces right
    let moveRight = () => {

    }

    // NOTES:
    //    - somehow keep track of empty coordinates - repeatedly doing random and checking if value is 0 is silly

    // initialize board on game start
    useEffect(() => {
        // console.log('hello, the page just loaded for the first time');
        // initializeBoard();
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