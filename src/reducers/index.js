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

const cID = (a,b) => `${a}:${b}`;
const createNeighbors = (r, c) => ([
  cID(r-1,c-1),
  cID(r,c-1),
  cID(r+1,c-1),
  cID(r-1, c),
  cID(r+1, c),
  cID(r-1, c+1),
  cID(r, c+1),
  cID(r+1, c+1)
])
const createCell = (r, c) => {
  return {
    alive: false,
    xpos: c,
    ypos: r,
    nsum: 0,
    neighbors: createNeighbors(r,c),
  }
}

const buildBoard = ({height, width}) => {
  const newCells = {};
  for (let r = 0; r < height; r ++) {
    for (let c = 0; c < width; c ++) {
      let id = cID(r, c);
      newCells[id] = createCell(r, c);
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
        if (nCell) {
          cells[cellId] = {...nCell, nsum: nCell.nsum + 1}
        }
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
    case SET_RANDOM:
      return {
        ...state,
        running: false,
        gen: 0,
        cells: randomCells({...state.cells})}
    case START_GAME:
      return {...state, running: true}
    case CHANGE_SPEED:
      return {...state, duration: action.duration}
    case PAUSE_GAME:
      return {...state, running: false}
    case RESET_GAME:
      return {
        ...state,
        gen: 0,
        running: false,
        cells: resetBoard(state.cells),
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
      return {
        ...state,
        running: false,
        gen: 0,
        height: action.height,
        cells: changeSize({height: action.height, width: state.width})
      }
    case CHANGE_WIDTH:
      return {
        ...state,
        running: false,
        gen: 0,
        width: action.width,
        cells: changeSize({height: state.height, width: action.width})
      }
    case TOGGLE_CELL:
      newCells = toggleCell({
        cells: {...state.cells},
        id: action.id,
      });
      return {...state, cells: newCells};
    default:
      return state;
  }
}

export default game;
