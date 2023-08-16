'use client'

import styles from './game.module.css'
import { useState, useEffect } from 'react'

function Game() {
    const [grid, setGrid] = useState([[0, 2, 0, 2], [4, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, 0]]);

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
            let leftmostEmptySpace = -1;
            let leftmostNonZeroSpace = -1;
            let leftmostNonZeroSpaceValue = -1;

            for (let spaceIndex = 0; spaceIndex < row.length; spaceIndex++) {

                // if the current space is the first space
                if (spaceIndex === 0) {
                    // if it is a zero, mark it as the leftmost empty space
                    if (row[spaceIndex] === 0) {
                        leftmostEmptySpace = spaceIndex;
                    }
                    // if it is a non-zero value, set leftmost non-zero space and its corresponding value
                    else {
                        leftmostNonZeroSpace = spaceIndex;
                        leftmostNonZeroSpaceValue = row[spaceIndex];
                    }
                }
                // if the current space is not the first space
                else {
                    // if the current space is a zero:
                    if (row[spaceIndex] === 0) {
                        // if there already is a leftmost empty space marked, do nothing
                        // if there is no leftmost empty space marked, mark current space as leftmost empty space
                        if (leftmostEmptySpace === -1) {
                            leftmostEmptySpace = spaceIndex;
                        }
                    }
                    // if the current space is a non-zero value
                    else {
                        // if there is a marked empty space, move the current space to the empty space
                        if (leftmostEmptySpace !== -1) {
                            // set the leftmost non-zero space to the space that is about to moved
                            leftmostNonZeroSpace = leftmostEmptySpace;
                            leftmostNonZeroSpaceValue = row[spaceIndex];

                            setTileValue([rowIndex, leftmostEmptySpace], row[spaceIndex]);
                            setTileValue([rowIndex, spaceIndex], 0);


                            leftmostEmptySpace++;
                        }

                        // if there is no marked leftmost non-zero space, mark the current space
                        if (leftmostNonZeroSpace === -1 && leftmostNonZeroSpaceValue === -1) {
                            leftmostNonZeroSpace = spaceIndex;
                            leftmostNonZeroSpaceValue = row[spaceIndex];
                        }
                        // if there is a marked non-zero space:
                        else {

                            // if the marked non-zero space is the same value as the current space:
                            if (leftmostNonZeroSpaceValue === row[spaceIndex]) {
                                // double the leftmost non-zero space
                                setTileValue([rowIndex, leftmostNonZeroSpace], leftmostNonZeroSpaceValue * 2);
                                // clear the current space
                                setTileValue([rowIndex, spaceIndex], 0);

                                // set leftmost empty space to the space right after the merged space
                                leftmostEmptySpace = leftmostNonZeroSpace + 1;
                                // reset non-zero space marking
                                leftmostNonZeroSpace = -1;
                                leftmostNonZeroSpaceValue = -1;
                            }

                            // if the marked non-zero space is different from the current space
                            else {
                                // if there are empty spaces between marked non-zero space and current space,
                                // set leftmost empty space to value of current space, increment leftmost space by 1
                                if (leftmostEmptySpace !== -1) {
                                    setTileValue([rowIndex, leftmostEmptySpace], row[spaceIndex]);
                                    setTileValue([rowIndex, spaceIndex], 0);
                                }
                            }
                        }
                    }
                }
            }
        })
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