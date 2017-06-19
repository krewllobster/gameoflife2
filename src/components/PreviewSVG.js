import React from 'react';

const previewSVG = ({preset}) => {
  return (
    <svg transform='scale(3)' width={preset.width} height={preset.height} version="1.1" xmlns="http:/www.w3.org/2000/svg">
      {Object.keys(preset.cells).map(id => {
        let cell = preset.cells[id];
        return (
          <rect
            key={id}
            x={cell.xpos}
            y={cell.ypos}
            width={1}
            height={1}
            fill={cell.alive ? 'black' : 'white'}
          >
          </rect>
        )
      })}
    </svg>
  )
}

export default previewSVG;
