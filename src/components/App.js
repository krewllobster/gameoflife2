import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TopMenu from '../containers/TopMenu';
import './App.css';

export class App extends Component {
  render() {

    return (
      <Container fluid>
        <TopMenu />
      </Container>
    );
  }
}
