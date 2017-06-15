import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ConnectedTopMenu from '../containers/ConnectedTopMenu';
import ConnectedBotMenu from '../containers/ConnectedBotMenu';
import Board from '../containers/Board';
import './App.css';

export class App extends Component {
  render() {

    return (
      <Container fluid>
        <ConnectedTopMenu />
        <Board />
        <ConnectedBotMenu />
      </Container>
    );
  }
}
