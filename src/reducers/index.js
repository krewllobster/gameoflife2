import {
  CHANGE_SIZE,
  START_GAME,
  PAUSE_GAME,
  RESET_GAME,
  STEP_GAME,
  TOGGLE_CELL,
  CHANGE_SPEED,
} from '../actions';

const pauseGame = (newState) => {
  newState.running = false;
  return newState
}

const resetGame = (state) => {
  let newCells = resetCells([...state.cells])
  return {...state, gen: 0, cells: newCells}
}

const resetCells = (cells) => {
  return cells.map( cell => {
    return {...cell, alive: false, nsum: 0}
  })
}

const toggleCell = ({cells, id}) => {
  cells[id] = {...cells[id], alive: !cells[id].alive};
  let change = cells[id].alive ? 1 : -1;
  cells[id].neighbors.forEach(cellId => {
    let nCell = cells[cellId];
    if (nCell) {
      cells[cellId] = {...nCell, nsum: nCell.nsum + change}
    }
  });
  return {...cells}
}

const cID = (a,b) => `${a}:${b}`

const redrawBoard = (h, w) => {
  let newCells = {}
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      let id = `${r}:${c}`;
      let newCell = {
        alive: false,
        xpos: c,
        ypos: r,
        nsum: 0,
        neighbors: [
          cID(r-1,c-1),
          cID(r,c-1),
          cID(r+1,c-1),
          cID(r-1, c),
          cID(r+1, c),
          cID(r-1, c+1),
          cID(r, c+1),
          cID(r+1, c+1)
        ]
      }
      newCells[id] = newCell
    }
  }
  return newCells;
}

const stepGame = ({cells}) => {
  let newCells = {}
  Object.entries(cells).forEach(([id, cell]) => {
    let { nsum, alive } = cell;
    if (alive && (nsum < 2 || nsum > 3)) {
      newCells[id] = {...cell, alive: false, nsum: 0}
    } else if (!alive && nsum === 3) {
      newCells[id] = {...cell, alive: true, nsum: 0}
    } else {
      newCells[id] = {...cell, nsum: 0}
    }
  });
  Object.keys(newCells).forEach(id => {
    let cell = newCells[id];
    if (cell.alive) {
      cell.neighbors.forEach(cellId => {
        let nCell = newCells[cellId];
        if (nCell) {
          newCells[cellId] = {...nCell, nsum: nCell.nsum + 1}
        }
      })
    }
  })
  return {...newCells}
}

const game = (state, action) => {
  let newState = {...state};
  switch (action.type) {
    case START_GAME:
      newState.running = true;
      return newState;
    case PAUSE_GAME:
      return pauseGame(newState);
    case RESET_GAME:
      return {
        ...state,
        gen: 0,
        running: false,
        cells: redrawBoard(state.height, state.width),
      };
    case STEP_GAME:
      let stepCells = stepGame({
        cells: {...state.cells}
      });
      return {
        ...state,
        paused: true,
        gen: {...state}.gen + 1,
        cells: stepCells,
      };
    case CHANGE_SIZE:
      let h = action.height ? action.height : {...state}.height;
      let w = action.width ? action.width : {...state}.width;
      return {
        ...state,
        height: h,
        width: w,
        cells: redrawBoard(h,w),
        gen: 0,
        running: false,
      };
    case CHANGE_SPEED:
      return {
        ...state,
        duration: action.duration,
      }
    case TOGGLE_CELL:
      let newCells = toggleCell({
        cells: {...state.cells},
        id: action.id,
      });
      return {...state, cells: newCells};
    default:
      return newState;
  }
}

export default game;
