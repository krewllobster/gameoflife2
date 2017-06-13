import React from 'react';
import { connect } from 'react-redux';
import { changeHeight, changeWidth } from '../actions';
import { Menu } from 'semantic-ui-react';


let BotMenu = ({ dispatch }) => {


  return (
    <Menu stackable widths={4}>
      <Menu.Item
        name='Run'
        onClick={() => dispatch(start())}
      />
      <Menu.Item
        name='Step'
        onClick={() => dispatch(step())}
      />
      <Menu.Item
        name='Pause'
        onClick={() => dispatch(pause())}
      />
      <Menu.Item
        name='Reset'
        onClick={() => dispatch(reset())}
      />
    </Menu>
  )
}

BotMenu = connect()(BotMenu)

export default BotMenu;
