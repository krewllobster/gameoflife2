import React, { Component } from 'react';
import { Menu, Icon, SideBar } from 'semantic-ui-react';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null
    }

    this.startGame = this.startGame.bind(this);
    this.tick = this.tick.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { running, duration } = this.props;
    if (running && !nextProps.running) {
      clearInterval(this.state.timer);
      this.setState({timer: null});
    }
    if (!running && nextProps.running) {
      let timer = setInterval(() => this.tick(), duration);
      this.setState({timer})
    }
    if (running && duration !== nextProps.duration) {
      clearInterval(this.state.timer)
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

  pauseGame() {
    this.props.pause();
  }

  render() {
    const {
      stepGame,
      setRandom,
      reset,
      resetStart,
      running,
      toggleSide,
      gen,
    } = this.props;

    return (
      <Menu stackable widths={6}>
        <Menu.Item
          name='presets'
          onClick={() => toggleSide()}
        >
          <Icon name='content'/>
          Presets
        </Menu.Item>
        <Menu.Item
          name='runControl'
          onClick={() => {
            running ? this.pauseGame() : this.startGame()
          }}
        >
          {running ? <Icon name='pause' /> : <Icon name='play' />}
          {running ? 'Pause' : 'Run'}
        </Menu.Item>
        <Menu.Item
          name='step'
          onClick={() => {
            this.pauseGame();
            stepGame();
          }}
        >
          {`Step (Current Gen: ${gen})`}
        </Menu.Item>
        <Menu.Item
          name='Reset'
          onClick={() => {
            resetStart();
          }}
        >
          <Icon name='refresh' /> Reset
        </Menu.Item>
        <Menu.Item
          name='Clear Board'
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
