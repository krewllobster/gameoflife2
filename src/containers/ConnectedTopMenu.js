import { connect } from 'react-redux';
import {
  start,
  pause,
  step,
  reset,
  setRandom,
  resetStart,
  toggleSide,
} from '../actions';
import TopMenu from '../components/TopMenu'

const mapStateToProps = (state, ownProps) => ({
  running: state.running,
  gen: state.gen,
  duration: state.duration,
  cells: state.cells,
})

const mapDispatchToProps = ({
  start: start,
  pause: pause,
  stepGame: step,
  reset: reset,
  setRandom: setRandom,
  resetStart: resetStart,
  toggleSide: toggleSide,
})

const ConnectedTopMenu = connect(mapStateToProps, mapDispatchToProps)(TopMenu)

export default ConnectedTopMenu;
