import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import { App } from './components/App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const game = {
  height: 10,
  width: 10,
  running: false,
  cells: {},
  gen: 0,
  cellSize: 15,
}
const cID = (a,b) => `${a}:${b}`
for (let i = 0; i < 10; i ++ ) {
  for (let j = 0; j < 10; j ++ ) {
    let id = `${i}:${j}`;
    let newCell = {
      alive: false,
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

const store = createStore(reducer, game, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
