import React from 'react';
import { connect } from 'react-redux';
import { start, pause, stepGame, reset } from '../actions';
import { Menu } from 'semantic-ui-react';

let TopMenu = ({
  start,
  pause,
  stepGame,
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
        onClick={() => stepGame()}
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

const mapStateToProps = (state, ownProps) => ({
  running: state.running,
  gen: state.gen,
})

const mapDispatchToProps = ({
  start: start,
  pause: pause,
  stepGame: stepGame,
  reset: reset,
})

const ConnectedTopMenu = connect(mapStateToProps, mapDispatchToProps)(TopMenu)

export default ConnectedTopMenu;
