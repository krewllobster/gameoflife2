import React from 'react';

const previewSVG = ({preset}) => {
  const {width, height, cells} = preset
  const svgStyle = {height: '50px'}
  return (
    <svg style={svgStyle} viewBox={`0 0 ${width} ${height}`} version="1.1" xmlns="http:/www.w3.org/2000/svg">
      {Object.keys(cells).map(id => {
        let cell = cells[id];
        return (
          <rect
            key={id}
            x={cell.xpos}
            y={cell.ypos}
            width={1}
            height={1}
            stroke='grey'
            strokeWidth='0.05'
            fill={cell.alive ? 'black' : 'white'}
          >
          </rect>
        )
      })}
    </svg>
  )
}

export default previewSVG;
