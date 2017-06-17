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
      width: 750,
      margin: 'auto'
    }

    return (
      <div className='board-container' style={boardContainerStyle}>
        <svg width='750' height='450' version="1.1" xmlns="http:/www.w3.org/2000/svg">
          {Object.keys(cells).map(id => {
            let cell = cells[id];
            return (
              <g key={id}>
                <rect
                  x={cell.xpos * 750/width}
                  y={cell.ypos * 450/height}
                  width={750/width}
                  height={450/height}
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
