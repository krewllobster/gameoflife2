import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ConnectedTopMenu from '../containers/ConnectedTopMenu';
import ConnectedBotMenu from '../containers/ConnectedBotMenu';
import ConnectedBoard from '../containers/ConnectedBoard';
import './App.css';

export class App extends Component {
  render() {

    return (
      <Container fluid>
        <ConnectedTopMenu />
        <ConnectedBoard />
        <ConnectedBotMenu />
      </Container>
    );
  }
}
