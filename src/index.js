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
  height: 150,
  width: 150,
  running: false,
  cells: [],
  gen: 0,
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
