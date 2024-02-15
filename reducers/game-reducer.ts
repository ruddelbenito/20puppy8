import { isNil } from "lodash";
import { tileCountPerDimension } from "@/constants";
import { Tile, TileMap } from "@/models/tile";
import { uid } from "uid";

type State = { board: string[][]; tiles: TileMap };
type Action = { type: "create_tile"; tile: Tile } | { type: "move_up"} | {type: "move_down"};

function createBoard() {
  const board: string[][] = [];

  for (let index = 0; index < tileCountPerDimension; index++) {
    board[index] = new Array(tileCountPerDimension).fill(undefined);
  }

  return board;
}

export const initialState: State = { board: createBoard(), tiles: {} };

function gameReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "create_tile": {
      const tileId = uid();
      const [x, y] = action.tile.position;
      const newBoard = JSON.parse(JSON.stringify(state.board));
      newBoard[y][x] = tileId;

      return {
        ...state,
        board: newBoard,
        tiles: {
          ...state.tiles,
          [tileId]: action.tile,
        },
      };
    }

    case "move_up": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};

      for (let x = 0; x < tileCountPerDimension; x++) {
        let newY = 0;

        for (let y = 0; y < tileCountPerDimension; y++) {
          const tileId = state.board[y][x];

          if (!isNil(tileId)) {
            newBoard[newY][x] = tileId;
            newTiles[tileId]= {
              ...state.tiles[tileId],
              position: [x, newY],
            }

            newY++;
          }
        }
      }

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
      }
    }

    case "move_down": {
      const newBoard = createBoard();
      const newTiles: TileMap = {};

      for (let x = 0; x < tileCountPerDimension; x++) {
        let newY = tileCountPerDimension - 1;

        for (let y = 0; y < tileCountPerDimension; y++) {
          const tileId = state.board[y][x];

          if (!isNil(tileId)) {
            newBoard[newY][x] = tileId;
            newTiles[tileId]= {
              ...state.tiles[tileId],
              position: [x, newY],
            }

            newY--;
          }
        }
      }

      return {
        ...state,
        board: newBoard,
        tiles: newTiles,
      }
    }

    default: {
      return state;
    }
  }
}

export default gameReducer;
