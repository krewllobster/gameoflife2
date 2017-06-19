import {
  CHANGE_HEIGHT,
  CHANGE_WIDTH,
  START_GAME,
  PAUSE_GAME,
  RESET_GAME,
  STEP_GAME,
  TOGGLE_CELL,
  SET_RANDOM,
  CHANGE_SPEED,
  RESET_START,
  TOGGLE_SIDE,
} from '../actions';


const randomCells = (cells) => {
  Object.keys(cells).forEach(id => {
    cells[id] = {...cells[id], alive: Math.random() >= .7}
  })
  return setNeighbors(cells)
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

const cID = (r,c,h,w) => {
  if (r < 0) {r = h - 1}
  if (r >= h) {r = 0}
  if (c < 0) {c = w - 1}
  if (c >= w) {c = 0}
  return `${r}:${c}`
}

const createNeighbors = (r, c, h, w) => ([
  cID(r-1,c-1, h, w),
  cID(r,c-1, h, w),
  cID(r+1,c-1, h, w),
  cID(r-1, c, h, w),
  cID(r+1, c, h, w),
  cID(r-1, c+1, h, w),
  cID(r, c+1, h, w),
  cID(r+1, c+1, h, w)
])

const createCell = (r, c, h, w) => {
  return {
    alive: false,
    xpos: c,
    ypos: r,
    nsum: 0,
    neighbors: createNeighbors(r,c,h,w),
  }
}

const buildBoard = ({height, width}) => {
  const newCells = {};
  for (let r = 0; r < height; r ++) {
    for (let c = 0; c < width; c ++) {
      let id = cID(r, c);
      newCells[id] = createCell(r, c, height, width);
    }
  }
  return newCells;
}

const changeSize = ({height, width}) => {
  return buildBoard({height, width});
}

const resetBoard = (cells) => {
  Object.keys(cells).forEach(id => {
    cells[id] = {...cells[id], alive: false, nsum: 0}
  })
  return {...cells}
}

const setNeighbors = (cells) => {
  Object.keys({...cells}).forEach(id => {
    let cell = cells[id];
    if (cell.alive) {
      cell.neighbors.forEach(cellId => {
        let nCell = cells[cellId];
        cells[cellId] = {...nCell, nsum: nCell.nsum + 1}
      })
    }
  })
  return {...cells}
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
  return setNeighbors(newCells);
}

const game = (state, action) => {
  let newCells = {}
  switch (action.type) {
    case TOGGLE_SIDE:
      return {...state, sideVisible: !state.sideVisible}
    case RESET_START:
      return {...state, cells: {...state.startCells}, gen: 0, running: false}
    case SET_RANDOM:
      newCells = randomCells(state.cells);
      return {
        ...state,
        running: false,
        gen: 0,
        cells: newCells,
        startCells: newCells,
      }
    case START_GAME:
      return {...state, running: true}
    case CHANGE_SPEED:
      return {...state, duration: action.duration}
    case PAUSE_GAME:
      return {...state, running: false}
    case RESET_GAME:
      newCells = resetBoard(state.cells);
      return {
        ...state,
        gen: 0,
        running: false,
        cells: newCells,
        startCells: newCells,
      };
    case STEP_GAME:
      newCells = stepGame({
        cells: {...state.cells}
      });
      return {
        ...state,
        paused: true,
        gen: state.gen + 1,
        cells: newCells,
      };
    case CHANGE_HEIGHT:
      newCells = changeSize({height: action.height, width: state.width});
      return {
        ...state,
        running: false,
        gen: 0,
        height: action.height,
        cells: newCells,
        startCells: newCells,
      }
    case CHANGE_WIDTH:
      newCells = changeSize({height: state.height, width: action.width});
      return {
        ...state,
        running: false,
        gen: 0,
        width: action.width,
        cells: newCells,
        startCells: newCells,
      }
    case TOGGLE_CELL:
      newCells = toggleCell({
        cells: {...state.cells},
        id: action.id,
      });
      return {
        ...state,
        cells: newCells,
        startCells: newCells,
        gen: 0,
        running: false,
      };
    default:
      return state;
  }
}

export default game;
