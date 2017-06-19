import React, { Component } from 'react';

class Board extends Component {

  componentWillReceiveProps(nextProps) {
    if (
      this.props.gen !== nextProps.gen &&
      JSON.stringify(this.props.cells) === JSON.stringify(nextProps.cells)
    ) {
      this.props.pause();
    }
  }

  render () {
    const {
      height,
      width,
      size,
      cells,
      toggleCell
    } = this.props

    const boardContainerStyle = {
      height: '465px',
      width: width*size,
      margin: 'auto'
    }

    return (
      <div className='board-container' style={boardContainerStyle}>
        <svg width={width*size} height={height*size} version="1.1" xmlns="http:/www.w3.org/2000/svg">
          {Object.keys(cells).map(id => {
            let cell = cells[id];
            return (
              <g key={id}>
                <rect
                  x={cell.xpos * size}
                  y={cell.ypos * size}
                  width={size}
                  height={size}
                  fill={cell.alive ? 'black' : 'white'}
                  stroke='grey'
                  strokeWidth='1'
                  onClick={(e) => {
                    let targetID =(e.target.y.baseVal.value/15+':'+e.target.x.baseVal.value/15)
                    toggleCell(targetID);
                  }}
                >
                </rect>
              </g>
            )
          })}
        </svg>
      </div>
    )
  }
}

export default Board;
