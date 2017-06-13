import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';


const TopMenuPreso = ({
  start,
  pause,
  step,
  reset,
  running,
  gen
}) => {
  return (
    <Menu stackable widths={3}>
      <Menu.Item
        name='runControl'
        onClick={() => {
          running ? pause() : start()
        }}
      >
        {running ? 'Pause' : 'Run'}
      </Menu.Item>
      <Menu.Item
        name='step'
        onClick={() => step()}
      >
        {`Step Generation (current: ${gen})`}
      </Menu.Item>
      <Menu.Item
        name='Reset'
        onClick={() => reset()}
      />
    </Menu>
  )
}

export default TopMenuPreso;
