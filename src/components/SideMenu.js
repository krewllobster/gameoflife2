import React, {Component} from 'react';
import { Sidebar, Segment, Menu, Icon, Grid } from 'semantic-ui-react';
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
            Here are some ideas to start with! <Icon
              name='close'
              link
              onClick={()=>toggleSide()}
              style={{hover: 'pointer'}}
            />
          </Menu.Item>
          <Grid as='Menu.Item' celled='internally' stackable>
            {presets.map(preset => {
              return (
                <Grid.Row
                  key = {preset.name}
                  textAlign={'center'}
                  verticalAlign={'middle'}
                  columns={'equal'}
                  onClick={(e) => console.log(preset)}
                >
                  <Grid.Column>
                    {preset.name}
                  </Grid.Column>
                  <Grid.Column>
                    <PreviewSVG preset={preset} style={{height: '100%'}}/>
                  </Grid.Column>
                </Grid.Row>
              )
            })}
          </Grid>
        </Sidebar>
        <Sidebar.Pusher>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SideMenu;
