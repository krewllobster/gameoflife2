import React from 'react';
import { connect } from 'react-redux';
import { start, pause, stepGame, reset } from '../actions';
import { Menu } from 'semantic-ui-react';
import TopMenu from '../components/TopMenu'

const mapStateToProps = (state, ownProps) => ({
  running: state.running,
  gen: state.gen,
  duration: state.duration,
})

const mapDispatchToProps = ({
  start: start,
  pause: pause,
  stepGame: stepGame,
  reset: reset,
})

const ConnectedTopMenu = connect(mapStateToProps, mapDispatchToProps)(TopMenu)

export default ConnectedTopMenu;
