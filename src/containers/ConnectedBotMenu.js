import React from 'react';
import { connect } from 'react-redux';
import { changeSize, changeSpeed } from '../actions';
import { Menu } from 'semantic-ui-react';

let BotMenu = ({
  height,
  width,
  size,
  duration,
  changeSpeed,
  changeSize,
}) => {
  let w = width;
  let h = height;
  return (
    <Menu stackable widths={3}>
      <Menu.Item
        name='heightControl'
      >
        <label htmlFor='height'>Height</label>
        <input
          id = 'height'
          type='range'
          min='1'
          max='30'
          defaultValue={height}
          onChange={(e) => changeSize(e.target.value, null)}
        />
        <span>{height}</span>
      </Menu.Item>
      <Menu.Item
        name='widthControl'
      >
        <label htmlFor='width'>Width</label>
        <input
          id = 'width'
          type='range'
          min='1'
          max='50'
          defaultValue={width}
          onChange={(e) => changeSize(null, e.target.value)}
        />
        <span>{width}</span>
      </Menu.Item>
      <Menu.Item
        name='speedControl'
      >
        <input
          id = 'speed'
          disabled
          type='range'
          min='200'
          max='3000'
          defaultValue={duration}
          onChange={(e) => changeSpeed(e.target.value)}
        />
        <span>{(duration/1000).toFixed(2)} second(s)</span>
      </Menu.Item>
    </Menu>
  )
}

const mapStateToProps = (state, ownProps) => ({
  height: state.height,
  width: state.width,
  size: state.cellSize,
  duration: state.duration,
})

const mapDispatchToProps = ({
  changeSize: changeSize,
  changeSpeed: changeSpeed,
})

const ConnectedBotMenu = connect(mapStateToProps, mapDispatchToProps)(BotMenu)

export default ConnectedBotMenu;
