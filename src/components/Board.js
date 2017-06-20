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
      width: '100%',
      padding: 'auto',
      marginBottome: '10px'
    }

    const svgStyle = {
      width: '100%',
      height: '70vh',
      padding: '20px',
    }

    return (
      <div style={boardContainerStyle}>
        <svg
          style={svgStyle}
          viewBox={`0 0 ${width} ${height}`}
          version="1.1"
          xmlns="http:/www.w3.org/2000/svg"
        >
          {Object.keys(cells).map(id => {
            let cell = cells[id];
            return (
              <rect
                x={cell.xpos}
                y={cell.ypos}
                width={1}
                height={1}
                fill={cell.alive ? 'black' : 'white'}
                stroke='grey'
                strokeWidth='0.05'
                onClick={(e) => {
                  let targetID =(cell.ypos+':'+cell.xpos)
                  toggleCell(targetID);
                }}
              >
              </rect>
            )
          })}
        </svg>
      </div>
    )
  }
}

export default Board;
