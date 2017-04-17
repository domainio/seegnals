import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './Main';
import { actions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import { BackAndroid, StatusBar, NavigationExperimental, Platform } from 'react-native';
import { StyleProvider, variables, Drawer, Container } from 'native-base';
import SideMenu from './SideMenu';
import { closeDrawer } from './actions/Drawer.actions';
import EventDetails from './components/EventDetails.view';

const { popRoute } = actions;
const RouterWithRedux = connect()(Router);
const { CardStack: NavigationCardStack } = NavigationExperimental;

class AppNavigator extends Component {

  componentDidMount() {
    if (this.props.drawerState === 'closed') {
      this.closeDrawer();
    }
  }

  componentDidUpdate() {
    console.log('app_nav did mount: ',this.props.drawerState);
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this.closeDrawer();
    }
  }

  openDrawer() {
    // this._drawer._root.open();
  }

  closeDrawer() {
    // this._drawer._root.close();
  }

  render() {
    return (
        <Container>
          <StatusBar hidden={true} />
            <RouterWithRedux hideNavBar= "true">
              <Scene key="root" hideNavBar>
                <Scene key="main" component={Main} />
                <Scene key="eventDetails" component={EventDetails} />
              </Scene>
            </RouterWithRedux>
        </Container>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  // popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
    drawerState: state.drawer.drawerState,
    themeState: state.drawer.themeState,
    // navigation: state.cardNavigation,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

{/*<Drawer*/}
  {/*type="static"*/}
  {/*content={<SideMenu navigator={this._navigator}/>}*/}
  {/*onClose={() => this.props.closeDrawer()}*/}
  {/*ref={(ref) => { this._drawer = ref; }}*/}
{/*>*/}
{/*</Drawer>*/}