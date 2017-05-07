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
import NewEvent from './components/NewEvent.view';
import LoginView from './components/Login.view';

const { popRoute } = actions;
const RouterWithRedux = connect()(Router);
const { CardStack: NavigationCardStack } = NavigationExperimental;

class AppNavigator extends Component {

  render() {
    return (
        <Container>
          <StatusBar hidden={true} />
            <RouterWithRedux hideNavBar= "true">
              <Scene key="root" hideNavBar>
                <Scene key="login" component={LoginView} />
                <Scene key="main" component={Main} />
                <Scene key="eventDetails" component={EventDetails} />
                <Scene key="newEvent" component={NewEvent} />
              </Scene>
            </RouterWithRedux>
        </Container>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  // popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
    themeState: state.drawer.themeState,
    // navigation: state.cardNavigation,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);