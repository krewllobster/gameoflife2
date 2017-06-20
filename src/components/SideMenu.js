import React, {Component} from 'react';
import { Container, Sidebar, Segment, Menu, Icon, Button, Grid } from 'semantic-ui-react';
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
          <Grid as='Menu.Item' celled='internally' stackable>
            {presets.map(preset => {
              return (
                <Grid.Row
                  textAlign={'center'}
                  verticalAlign={'middle'}
                  columns={'equal'}
                  onClick={(e) => console.log(preset)}
                >
                  <Grid.Column>
                    {preset.name}
                  </Grid.Column>
                  <Grid.Column fitted>
                    <PreviewSVG preset={preset} style={{height: '100%'}}/>
                  </Grid.Column>
                </Grid.Row>
              )
            })}
          </Grid>
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
