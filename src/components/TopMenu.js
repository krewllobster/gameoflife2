import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null
    }

    this.tick = this.tick.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { running, duration } = this.props;
    if (!nextProps.running) {
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

  tick() {
    this.props.stepGame();
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
      pause,
      start,
    } = this.props;

    return (
      <Menu widths={6}>
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
            running ? pause() : start()
          }}
        >
          {running ? <Icon name='pause' /> : <Icon name='play' />}
          {running ? 'Pause' : 'Run'}
        </Menu.Item>
        <Menu.Item
          name='step'
          onClick={() => {
            pause();
            stepGame();
          }}
        >
          <Icon name='arrow right' /> {`(Gen: ${gen})`}
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
            setRandom()
          }}
        >
          Randomize
        </Menu.Item>
      </Menu>
    )
  }
}

export default TopMenu;
