import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
    }

    this.startGame = this.startGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextProps.running && nextState.timer) {
      clearInterval(this.state.timer);
    }
  }

  startGame() {
    this.props.start();
    let timer = setInterval(() => this.tick(), this.props.duration);
    this.setState({timer})
  }

  tick() {
    this.props.stepGame();
  }

  pauseGame() {
    this.props.pause();
    clearInterval(this.state.timer);
  }

  render() {
    const {
      stepGame,
      setRandom,
      reset,
      running,
      gen
    } = this.props;

    return (
      <Menu stackable widths={4}>
        <Menu.Item
          name='runControl'
          onClick={() => {
            running ? this.pauseGame() : this.startGame()
          }}
        >
          {running ? 'Pause' : 'Run'}
        </Menu.Item>
        <Menu.Item
          name='step'
          onClick={() => {
            this.pauseGame();
            stepGame();
          }}
        >
          {`Step Generation (current: ${gen})`}
        </Menu.Item>
        <Menu.Item
          name='Reset'
          onClick={() => {
            this.pauseGame();
            reset();
          }}
        />
        <Menu.Item
          name='Set Random'
          onClick={() => setRandom()}
        >
          Randomize Board
        </Menu.Item>
      </Menu>
    )
  }
}

export default TopMenu;
