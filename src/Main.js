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

class Main extends Component {
  render() {
    return (
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
          <Tab heading="Map">
            <EventMap />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="flash" /><Text>Seegnals</Text></TabHeading>}>
            <EventTab />
          </Tab>
          <Tab heading="Tab3">
            <Text>three</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
  // pushRoute: (route, key) => dispatch(pushRoute(route, key)),
});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

// return (
//   <Drawer
//     type="static"
//     open={this.state.isOpen}
//     content={<SideMenu navigator={this._navigator}/>}
//     onClose={() => this.closeDrawer()}
//     styles={{ flex: 1 }}
//   >
//     { Content }
//   </Drawer>
// );

