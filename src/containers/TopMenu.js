import React from 'react';
import { connect } from 'react-redux';
import { start, pause, step, reset } from '../actions';
import { Menu } from 'semantic-ui-react';
import TopMenuPreso from '../components/TopMenuPreso';


const mapStateToProps = (state, ownProps) => ({
  running: state.running,
  gen: state.gen,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => {
    dispatch(start())
  },
  pause: () => {
    dispatch(pause())
  },
  step: () => {
    dispatch(step())
  },
  reset: () => {
    dispatch(reset())
  }
})

const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(TopMenuPreso)

export default ConnectedMenu;
