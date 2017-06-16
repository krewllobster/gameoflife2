import React from 'react';

const Cell = ({cell, size, running, toggleCell, pause}) => {
  <rect key={cell.id}
    x={cell.xpos * size}
    y={cell.ypos * size}
    width={size}
    height={size}
    fill={cell.alive ? 'black' : 'white'}
    stroke='grey'
    strokeWidth='1'
    onClick={(e) => {
      if(running) {
        this.props.pause();
      }
      let targetID =(e.target.y.baseVal.value/15+':'+e.target.x.baseVal.value/15);
      this.props.toggleCell(targetID)
    }}
  >
  </rect>
}

export default Cell;
