import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.running) {
      setTimeout(this.props.stepGame(), this.props.duration)
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
