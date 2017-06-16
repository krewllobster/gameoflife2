import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeHeight, changeWidth, changeSpeed } from '../actions';
import { Menu } from 'semantic-ui-react';

class BotMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: this.props.height,
      width: this.props.width,
      speed: (this.props.duration/1000).toFixed(2),
    }
  }

  render() {
    const {
      height,
      width,
      changeSpeed,
      changeHeight,
      changeWidth,
      duration
    } = this.props;

    return (
      <div>
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
              type='range'
              min='200'
              max='3000'
              defaultValue={duration}
              onChange={(e) => this.setState({speed: (e.target.value/1000).toFixed(2)})}
              onMouseUp={(e) => changeSpeed(e.target.value)}
            />
            <span>{(this.state.speed)} second(s)</span>
          </Menu.Item>
        </Menu>
        <div style={{textAlign: 'center'}}>
          <a href="https://github.com/krewllobster/gameoflife2" target="_blank">
            Game of Life GitHub repository
          </a>
        </div>
      </div>
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(BotMenu)
