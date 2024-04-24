import styles from "@/styles/board.module.css";
import Tile from "./tile";
import { useCallback, useContext, useEffect, useRef } from "react";
import { Tile as TileModel } from "@/models/tile";
import { GameContext } from "@/context/game-context";

function Board() {
  const { getTiles, moveTiles, startGame } = useContext(GameContext);
  const initialized = useRef(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();

    switch (e.key) {
      case "ArrowUp":
        moveTiles("move_up");
        break;
      case "w":
        moveTiles("move_up");
        break;

      case "ArrowDown":
        moveTiles("move_down");
        break;
      case "s":
        moveTiles("move_down");

      case "ArrowLeft":
        moveTiles("move_left");
        break;
      case "a":
        moveTiles("move_left");
        break;

      case "ArrowRight":
        moveTiles("move_right");
        break;
      case "d":
        moveTiles("move_right");
        break;
    }
  }, [moveTiles]);

  const renderGrid = () => {
    const cells: JSX.Element[] = [];
    const totalCellsCount = 16;

    for (let index = 0; index < totalCellsCount; index++) {
      cells.push(<div className={styles.cell} key={index} />);
    }

    return cells;
  };

  const renderTiles = () => {
    return getTiles().map(
      (tile: TileModel) => {
        return <Tile key={`${tile.id}`} {...tile} />;
      },
    );
  };

  useEffect(() => {
    if (initialized.current === false) {
      startGame()
      initialized.current = true;
    }
  }, [startGame]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={styles.board}>
      <div className={styles.tiles}>{renderTiles()}</div>
      <div className={styles.grid}>{renderGrid()}</div>
    </div>
  );
}

export default Board;
