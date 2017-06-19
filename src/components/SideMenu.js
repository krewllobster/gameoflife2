import React, {Component} from 'react';
import { Sidebar, Segment, Menu, Icon, Button } from 'semantic-ui-react';
import ConnectedTopMenu from '../containers/ConnectedTopMenu';
import BotMenu from '../containers/BotMenu';
import ConnectedBoard from '../containers/ConnectedBoard';
import PreviewSVG from './PreviewSVG'

class SideMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.sideVisible})
  }

  render() {
    const { visible } = this.state;
    const { toggleSide, presets } = this.props;
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='slide along' width='wide' visible={visible} vertical>
          <Menu.Item header>
            Select a preset, or save your own!
          </Menu.Item>
          {presets.map(preset => {
            return (
              <Menu.Item onClick={() => console.log(preset.cells)}>
                {preset.name}: h:{preset.height} w:{preset.width}
                <PreviewSVG preset={preset} />
              </Menu.Item>
            )
          })}
        </Sidebar>
        <Sidebar.Pusher>
          <ConnectedTopMenu />
          <ConnectedBoard />
          <BotMenu />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SideMenu;
