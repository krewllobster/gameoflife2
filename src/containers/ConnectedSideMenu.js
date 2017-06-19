import { connect } from 'react-redux';
import {
  toggleSide,
} from '../actions';

import SideMenu from '../components/SideMenu'

const mapStateToProps = (state, ownProps) => ({
  sideVisible: state.sideVisible,
})

const mapDispatchToProps = ({
  toggleSide: toggleSide,
})

const ConnectedSideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenu)

export default ConnectedSideMenu;
