import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Drawer, Container, TabHeading, Text, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
import EventTab from './components/EventTab';
import SideMenu from './SideMenu';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Actions } from 'react-native-router-flux';
import { closeDrawer, openDrawer } from './actions/Drawer.actions';
import EventMap from './components/EventMap';
import TestMap from './components/TestMap';

class Main extends Component {

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
    this._drawer._root.open();
  }

  closeDrawer() {
    this._drawer._root.close();
  }

  render() {
    return (
    <Drawer
      type="static"
      content={<SideMenu navigator={this._navigator}/>}
      onClose={() => this.props.closeDrawer()}
      ref={(ref) => { this._drawer = ref; }}
    >
      <Container>
        <StatusBar hidden={true} />
        <Header hasTabs>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>SeeYoo</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="flash" /><Text>Seegnals</Text></TabHeading>}>
            <EventTab />
          </Tab>
          <Tab heading="Map">
            <EventMap />
          </Tab>
          <Tab heading="Tab3">
            <TestMap />
          </Tab>
        </Tabs>
      </Container>
    </Drawer>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
  // pushRoute: (route, key) => dispatch(pushRoute(route, key)),
});

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);