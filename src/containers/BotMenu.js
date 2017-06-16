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
            <label htmlFor='height' style={{paddingRight: '5px'}}>Height</label>
            <input
              id = 'height'
              type='range'
              min='0'
              max='30'
              step='5'
              defaultValue={height}
              onChange={(e) => {
                this.setState({height: e.target.value})
                changeHeight(e.target.value);
              }}
              //onMouseUp={(e) => changeHeight(e.target.value)}
            />
            <span style={{paddingLeft: '5px'}}>{this.state.height}</span>
          </Menu.Item>
          <Menu.Item
            name='widthControl'
          >
            <label htmlFor='width' style={{paddingRight: '5px'}}>Width</label>
            <input
              id = 'width'
              type='range'
              min='0'
              max='50'
              step='5'
              defaultValue={width}
              onChange={(e) => {
                this.setState({width: e.target.value})
                changeWidth(e.target.value);
              }}
              //onMouseUp={(e) => changeWidth(e.target.value)}
            />
            <span style={{paddingLeft: '5px'}}>{this.state.width}</span>
          </Menu.Item>
          <Menu.Item
            name='speedControl'
          >
            <label htmlFor='width' style={{paddingRight: '5px'}}>Speed</label>

            <input
              id = 'speed'
              type='range'
              min='10'
              step='10'
              max='1000'
              defaultValue={duration}
              onChange={(e) => {
                this.setState({speed: e.target.value});
                changeSpeed(e.target.value);
              }}
            />
            <span style={{paddingLeft: '5px'}}>{this.props.duration} ms</span>
          </Menu.Item>
        </Menu>
        <div style={{textAlign: 'center'}}>
          <a
            href="https://github.com/krewllobster/gameoflife2"
            target="_blank"
            rel="noopener noreferrer"
          >
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
