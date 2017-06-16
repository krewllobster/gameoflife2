import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { App } from './components/App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

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
  timer: null,
}
const cID = (a,b) => `${a}:${b}`
for (let i = 0; i < DEF_HEIGHT; i ++ ) {
  for (let j = 0; j < DEF_WIDTH; j ++ ) {
    let id = `${i}:${j}`;
    let newCell = {
      alive: Math.random() >= .7,
      xpos: j,
      ypos: i,
      nsum: 0,
      neighbors: [
        cID(i-1,j-1),
        cID(i,j-1),
        cID(i+1,j-1),
        cID(i-1, j),
        cID(i+1, j),
        cID(i-1, j+1),
        cID(i, j+1),
        cID(i+1, j+1)
      ]
    }
    game.cells[id] = newCell;
  }
}

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

const store = createStore(reducer, game);

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
