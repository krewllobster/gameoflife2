import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ConnectedTopMenu from '../containers/ConnectedTopMenu';
import BotMenu from '../containers/BotMenu';
import ConnectedBoard from '../containers/ConnectedBoard';
import ConnectedSideMenu from '../containers/ConnectedSideMenu';
import './App.css';

export class App extends Component {
  render() {

    return (
      <Container fluid>
        <ConnectedSideMenu>
          <ConnectedTopMenu />
          <ConnectedBoard />
          <BotMenu />
        </ConnectedSideMenu>
      </Container>
    );
  }
}
