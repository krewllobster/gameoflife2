import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null
    }

    this.startGame = this.startGame.bind(this);
    this.tick = this.tick.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.running && !nextProps.running) {
      clearInterval(nextState.timer)
      nextState.timer = null;
    }
    if (!this.props.running && nextProps.running) {
      let timer = setInterval(() => this.tick(), this.props.duration);
      this.setState({timer})
    }
    if (nextProps.duration !== this.props.duration
      && this.props.running
    ) {
      clearInterval(nextState.timer)
      this.setState({timer: null})
      let timer = setInterval(() => this.tick(), this.props.duration);
      this.setState({timer})
    }
  }

  startGame() {
    this.props.start();
  }

  tick() {
    this.props.stepGame();
  }

  clearTimer() {
    clearInterval(this.state.timer);
  }

  pauseGame() {
    this.props.pause();
  }

  render() {
    const {
      stepGame,
      setRandom,
      reset,
      running,
      gen,
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
            reset();
          }}
        />
        <Menu.Item
          name='Set Random'
          onClick={() => {
            this.pauseGame()
            setRandom()
          }}
        >
          Randomize Board
        </Menu.Item>
      </Menu>
    )
  }
}

export default TopMenu;
