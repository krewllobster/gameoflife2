import React from 'react';
import { connect } from 'react-redux';
import { toggleCell } from '../actions';
import { Container } from 'semantic-ui-react';
import './Board.css';

const Board = ({
  height,
  width,
  size,
  cells,
  toggleCell,
  running,
}) => {
  const boardStyle = {
    height: height*size,
    width: width*size,
    margin: 'auto',
  }
  const cellStyle = {
    width: size,
    height: size,
    color: 'red',
  }
  return (
      <div className="board" style={boardStyle}>
        {Object.keys(cells).map(cellID => {
          let cell = cells[cellID];
          return (
            <div
              style={cellStyle}
              className={`cell cell-alive-${cell.alive.toString()}`}
              key={cellID}
              id={cellID}
              onClick={(e) => {
                if (!running) {toggleCell(e.target.id)}
              }}
            >
            </div>
          )}
        )}
      </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  height: state.height,
  width: state.width,
  size: state.cellSize,
  cells: state.cells,
  running: state.running,
})

const mapDispatchToProps = ({
  toggleCell: toggleCell,
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
