import React, { Component } from 'react';

class Board extends Component {

  render () {
    const {
      height,
      width,
      size,
      cells,
      toggleCell,
      running,
      pause,
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
                    if (running) {
                      pause();
                    }
                    let targetID =(e.target.y.baseVal.value/15+':'+e.target.x.baseVal.value/15)
                    console.log(targetID)
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
