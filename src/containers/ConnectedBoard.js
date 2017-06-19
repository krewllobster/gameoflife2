import { connect } from 'react-redux';
import { toggleCell, pause } from '../actions';
import Board from '../components/Board'

const mapStateToProps = (state, ownProps) => ({
  height: state.height,
  width: state.width,
  size: state.cellSize,
  cells: state.cells,
  gen: state.gen,
})

const mapDispatchToProps = ({
  toggleCell: toggleCell,
  pause: pause,
})

const ConnectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board)

export default ConnectedBoard;
