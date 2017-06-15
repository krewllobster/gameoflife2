import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pause, changeHeight, changeWidth, changeSpeed } from '../actions';
import { Menu } from 'semantic-ui-react';

class BotMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: this.props.height,
      width: this.props.width,
    }
  }

  render() {
    const {
      height,
      width,
      size,
      duration,
      changeSpeed,
      changeHeight,
      changeWidth,
      pause,
    } = this.props;

    const w = width;
    const h = height;

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
            onChange={(e) => this.setState({height: e.target.value})}
            onMouseUp={(e) => changeHeight(e.target.value)}
          />
          <span>{this.state.height}</span>
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
            onChange={(e) => this.setState({width: e.target.value})}
            onMouseUp={(e) => changeWidth(e.target.value)}
          />
          <span>{this.state.width}</span>
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
}

const mapStateToProps = (state, ownProps) => ({
  height: state.height,
  width: state.width,
  size: state.cellSize,
  duration: state.duration,
})

const mapDispatchToProps = ({
  changeHeight: changeHeight,
  changeWidth: changeWidth,
  changeSpeed: changeSpeed,
  pause: pause,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(BotMenu)
