import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { App } from './components/App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { presets } from './data/Presets';

const DEF_HEIGHT = 15;
const DEF_WIDTH = 15;
const DEF_SIZE = 15;
const DEF_DURATION = 200;

const game = {
  height: DEF_HEIGHT,
  width: DEF_WIDTH,
  running: false,
  duration: DEF_DURATION,
  cells: {},
  gen: 0,
  cellSize: DEF_SIZE,
  startCells: {},
  sideVisible: false,
}

const cID = (r,c,h,w) => {
  if (r < 0) {r = h - 1}
  if (r >= h) {r = 0}
  if (c < 0) {c = w - 1}
  if (c >= w) {c = 0}
  return `${r}:${c}`
}

for (let i = 0; i < DEF_HEIGHT; i ++ ) {
  for (let j = 0; j < DEF_WIDTH; j ++ ) {
    let id = `${i}:${j}`;
    let newCell = {
      alive: Math.random() >= .7,
      xpos: j,
      ypos: i,
      nsum: 0,
      neighbors: [
        cID(i-1,j-1, game.height, game.width),
        cID(i,j-1, game.height, game.width),
        cID(i+1,j-1, game.height, game.width),
        cID(i-1, j, game.height, game.width),
        cID(i+1, j, game.height, game.width),
        cID(i-1, j+1, game.height, game.width),
        cID(i, j+1, game.height, game.width),
        cID(i+1, j+1, game.height, game.width)
      ]
    }
    game.cells[id] = newCell;
  }
}

game.startCells = game.cells;

Object.keys(game.cells).forEach(id => {
  let cell = game.cells[id];
  if (cell.alive) {
    cell.neighbors.forEach(cellId => {
      let nCell = game.cells[cellId];
      if (nCell) {
        game.cells[cellId] = {...nCell, nsum: nCell.nsum + 1}
      }
    })
  }
})

let storedPresets = JSON.parse(localStorage.getItem('presets_gameoflife'))

/*if (storedPresets) {
  console.log('presets found')
  game.presets = storedPresets
}*/
//if (!storedPresets) {
  console.log('no presets')
  localStorage.setItem('presets_gameoflife', JSON.stringify(presets))
  game.presets = presets
//}

const store = createStore(reducer, game, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}

export default store;
